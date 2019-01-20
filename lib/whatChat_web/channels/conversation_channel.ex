defmodule WhatChatWeb.ConversationChannel do
  use Phoenix.Channel
  alias WhatChatWeb.Presence

  
  def join("conversation:"<> id_channel, _params, socket) do
    {:ok, assign(socket, :discussion_id, id_channel)}
  end

  
  def handle_in("conversation:user_is_typing", params, socket) do
    broadcast(socket, "conversation:hey_someone_is_typing", %{discussion_id: socket.assigns.discussion_id, user_id: socket.assigns.user_id} )
    {:noreply, socket}
  end
  
  def handle_in("conversation:user_stop_typing", params, socket) do 
    broadcast(socket, "conversation:hey_someone_remove_typing", %{discussion_id: socket.assigns.discussion_id, user_id: socket.assigns.user_id} )
    {:noreply, socket}
  end

  
end
