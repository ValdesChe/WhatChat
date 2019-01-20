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
    discussions = 
      socket.assigns.user
      |> Repo.preload(conversations: [:users, :messages])
    
    some = Enum.map(discussions.conversations, fn conversation -> 
      counter = 0
      Enum.map( conversation.users, fn user -> 
        counter = counter + 1
        user = Map.delete(user, :conversations)
        |> Map.delete(:password)
        |> Map.delete(:password_hash)
        |> Map.delete(:updated_at)
        |> Map.delete(:inserted_at)
        # |> Map.delete(:email)

      end)

      if(counter > 2) do
        Map.put_new(conversation, :is_group, true)
      else
        Map.put_new(conversation, :is_group, false)
      end

    end)
      
    IO.puts("---------***** DISCUSSIONS ******----------")
    IO.inspect(discussions)
    IO.inspect(some)
    send(self(), :after_join)


    # broadcast!(socket, "users:#{socket.assigns.topic.id}:new", %{comment: comment})
    # send(self(), :after_join)
    {:ok, %{ discussions: some }, socket}
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
