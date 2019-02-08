defmodule WhatChatWeb.SessionController do
  use WhatChatWeb, :controller

  plug(WhatChatWeb.Plugs.RequireAuth when action in [:delete])

  @doc """
    Attemps to login the user into the chat
    return {:ok, user} || {:error, message}
  """
  def create(conn, %{"email" => email, "password" => password}) do
    case WhatChat.Accounts.authenticate_user(email, password) do
      {:ok, user} ->

        conn
        |> put_session(:current_user, user)
        |> put_status(:ok)
		    |> put_view(WhatChatWeb.UserView)
        |> render("sign_in.json", user: user)

      {:error, message} ->
        conn
        |> delete_session(:current_user)
        |> put_status(:unauthorized)
		    |> put_view(WhatChatWeb.ErrorView)
        |> render( "401.json", message: message)
    end
  end

  def ping(conn, _params) do
    # IO.inspect conn
    case get_session(conn, :current_user) do
      nil ->
        conn
        |> put_status(:unauthorized)
		    |> put_view(WhatChatWeb.ErrorView)
        |> render("401.json", message: "You are not logged in!")
      user ->
        conn
        |> put_status(:ok)
        |> put_view(WhatChatWeb.UserView)
        |> render("show.json", user: user)
    end
  end

  def delete(conn, _params) do
    conn
    |> configure_session(drop: true)
    |> put_status(:ok)
    |> put_view(WhatChatWeb.UserView)
    |> render("sign_out.json", message: "Bye!")
  end
end
