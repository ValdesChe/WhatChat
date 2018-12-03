defmodule WhatChatWeb.RoomChannel do
  use Phoenix.Channel
  def join("room:lobby", _message, socket) do
    {:ok, socket}
  end

end
