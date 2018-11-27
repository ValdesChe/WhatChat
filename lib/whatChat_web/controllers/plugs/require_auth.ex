defmodule WhatChatWeb.Plugs.RequireAuth do
  import Plug.Conn
  import Phoenix.Controller

  def init(_params) do
  end

  def call(conn, _params) do
    if get_session(conn, :current_user) do
      conn
    else
      conn
      |> put_status(:unauthorized)
      |> render(WhatChatWeb.ErrorView, "401.json", message: "Unauthenticated User")
      |> halt()
    end
  end
end
