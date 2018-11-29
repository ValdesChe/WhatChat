defmodule WhatChatWeb.UserView do
  use WhatChatWeb, :view
  alias WhatChatWeb.UserView

  def render("index.json", %{users: users}) do
    %{users: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    render_one(user, UserView, "sign_in.json")
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      username: user.username,
      image: user.image
    }
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
