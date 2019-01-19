require IEx;
defmodule WhatChatWeb.UsersChannel do
  use Phoenix.Channel
  alias WhatChatWeb.Utils.Monitors.{Monitor}
  alias WhatChatWeb.ChatPresence
  alias WhatChat.Accounts
  alias WhatChat.Discussions.Conversation
  alias WhatChat.Repo

  def join("users:join", _params, socket) do
    user_id = socket.assigns.user_id
    my_discussions = 
      user_id
      |> Accounts.get_user! 
      |> Repo.preload(conversations: [:messages])
    
      
    IO.puts("---------***** DISCUSSIONS ******----------")
    IO.inspect(my_discussions)
    send(self(), :after_join)

    # broadcast!(socket, "users:#{socket.assigns.topic.id}:new", %{comment: comment})
    # send(self(), :after_join)
    {:ok, %{ discussions: my_discussions.conversations }, socket}
  end

  def handle_info(:after_join, socket) do
    ChatPresence.track_user_join(socket, current_user(socket))
    presences = ChatPresence.list(socket)
    IO.puts("***************** /////// PRESENCES  ///////// *********************")
    IO.inspect(presences)
    IO.puts("*****************///////-----------")
    push socket, "presence_state", presences
    #broadcast! socket, "user:joined", presences

    {:noreply, socket}

  end


  def handle_in("users:declare", %{"userInfo" => userInfo} , socket) do
    broadcast!(socket, "users:joined" , %{NewUserInfo: userInfo })
    {:reply, :ok, socket}
  end

  # The user want to add a new discussion/ conversation with someone
  def handle_in("users:newConversation", %{"contact_id" => contact_id} , socket) do
    # broadcast!(socket, "users:joined" , %{NewUserInfo: userInfo })
    
    {:reply, :ok, socket}
  end

  def current_user(socket) do
    socket.assigns.user
  end



end
