defmodule WhatChatWeb.ConversationChannel do
  use Phoenix.Channel
  alias WhatChatWeb.Presence

  
  def join("conversation:"<> id_channel, _params, socket) do
    {:ok, %{yo: "Ensort", drdff: id_channel}, socket}
  end

end
