defmodule WhatChatWeb.UserController do
  use WhatChatWeb, :controller

  alias WhatChat.Accounts
  alias WhatChat.Accounts.User

  action_fallback WhatChatWeb.FallbackController


  plug(WhatChatWeb.Plugs.RequireAuth when action not in [:create])

  def index(conn, _params) do
    users = Accounts.list_users()
    render(conn, "index.json", users: users)
  end

  def create(conn, user_params) do
    with {:ok, %User{} = user} <- Accounts.create_user(user_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.user_path(conn, :show, user))
      |> render("show.json", user: user)
    end
  end

  @spec show(Plug.Conn.t(), map()) :: Plug.Conn.t()
  def show(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)
    render(conn, "show.json", user: user)
  end

  def update(conn, %{"id" => id, "user" => user_params}) do
    case check_rights(conn, id) do
      true ->
        user = Accounts.get_user!(id)

        with {:ok, %User{} = user} <- Accounts.update_user(user, user_params) do
          conn
          |> put_session(:current_user, user)
          |> render("show.json", user: user)
        end
      _ -> render(conn, "401.json", message: "Unauthorized")
    end
  end

  def delete(conn, %{"id" => id}) do
    case check_rights(conn, id) do
      true ->
            user = Accounts.get_user!(id)

            with {:ok, %User{}} <- Accounts.delete_user(user) do
              conn
              |> configure_session(drop: true)
              |> put_status(:ok)
              |> send_resp(:no_content, "")
            end
      _ -> render(conn, "401.json", message: "Unauthorized")
    end
  end

  defp check_rights(conn, id) do
    %{id: user_id} = get_session(conn, :current_user)
    user_id == String.to_integer id
  end
end
