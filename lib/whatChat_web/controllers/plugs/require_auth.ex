defmodule WhatChatWeb.Plugs.RequireAuth do
  import Plug.Conn
  import Phoenix.Controller

  def init(_params) do
  end

  def call(conn, _params) do
    # IO.puts "===================="
    # IO.inspect params
    # IO.puts "===================="
    # IO.inspect get_session(conn, :current_user)
    # IO.puts "===================="
    if get_session(conn, :current_user) do
      # IO.puts "++++++++++++++++"
      conn
    else
      # IO.puts "-------------"
      conn
      |> put_status(:unauthorized)
      |> put_view(WhatChatWeb.ErrorView)
      |> render("401.json", message: "Unauthenticated User")
      |> halt()
    end
  end
end
