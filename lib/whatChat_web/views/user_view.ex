defmodule WhatChatWeb.UserView do
  use WhatChatWeb, :view
  alias WhatChatWeb.UserView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
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
      data: %{
        user: %{
          id: user.id,
          image: user.image,
          username: user.username,
          email: user.email
        }
      }
    }
  end

  def render("sign_out.json", %{message: message}) do
    %{
      data: %{
        detail: message
      }
    }
  end
end
