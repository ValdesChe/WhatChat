defmodule ApiWeb.MeController do
  use WhatChatWeb, :controller

  def ping(conn, _params) do
    case get_session(conn, :current_user) do
      nil ->
        conn
        |> put_status(:unauthorized)
        |> render(WhatChatWeb.ErrorView, "401.json", message: "You are not logged in!")
      user ->
        conn
        |> put_status(:ok)
        |> render(WhatChatWeb.UserView, "user.json", user: user)
    end
  end
end
