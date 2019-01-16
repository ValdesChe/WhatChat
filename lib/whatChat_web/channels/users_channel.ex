defmodule WhatChatWeb.UsersChannel do
  use Phoenix.Channel

  def join("users:join", _params, socket) do
    IO.puts("*****************///////-----------")
    IO.inspect(socket)

    # broadcast!(socket, "users:#{socket.assigns.topic.id}:new", %{comment: comment})
    # send(self(), :after_join)
    {:ok, socket}
  end

  def handle_in("users:declare", %{"userInfo" => userInfo} , socket) do
    broadcast!(socket, "users:joined" , %{NewUserInfo: userInfo })
    {:reply, :ok, socket}
  end



end
