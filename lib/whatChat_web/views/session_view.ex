defmodule WhatChatWeb.SessionView do
  use WhatChatWeb, :view
  alias WhatChatWeb.SessionView

  def render("show.json", %{user: user}) do
    render_one(user, SessionView, "sign_in.json")
  end

  def render("sign_in.json", %{user: user}) do
    %{
        user: %{
          id: user.id,
          image: user.image,
          username: user.username,
          email: user.email
        }
    }
  end

  def render("sign_out.json", %{message: message}) do
    %{
      message: %{
        detail: message
      }
    }
  end
end
