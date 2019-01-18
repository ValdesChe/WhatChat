require IEx;
defmodule WhatChatWeb.UsersChannel do
  use Phoenix.Channel
  alias WhatChatWeb.Utils.Monitors.{Monitor}
  alias WhatChatWeb.ChatPresence

  def join("users:join", _params, socket) do
   
    # IO.inspect(socket)
    send(self(), :after_join)

    # broadcast!(socket, "users:#{socket.assigns.topic.id}:new", %{comment: comment})
    # send(self(), :after_join)
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    ChatPresence.track_user_join(socket, current_user(socket))
    presences = ChatPresence.list(socket)
    IO.puts("*****************///////-----------")
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

  def current_user(socket) do
    socket.assigns.user
  end



end
