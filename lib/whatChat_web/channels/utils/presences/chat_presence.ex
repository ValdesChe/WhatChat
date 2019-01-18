defmodule WhatChatWeb.ChatPresence do
  use Phoenix.Presence, otp_app: :whatChat, pubsub_server: WhatChat.PubSub
  
  alias WhatChatWeb.{ChatPresence}
  def track_user_join(socket, user) do
    ChatPresence.track(socket, user.id, %{
      #typing: false,
      #unread: 2,
      #count: 100,
      #messages: [
      #  %{
      #    id: 1,
      #    from_id: user.id
      #    to_
      #  }
      #]
      image: user.image,
      username: user.username,
      email: user.email,
      id: user.id
    })
  end

  # Updating user info
  def track_user_update(socket, id_user, user) do
    ChatPresence.update(socket, user.id, %{
      # typing: user.typing,
      image: user.image,
      username: user.username,
      email: user.email,
      id: id_user
    })
  end
end