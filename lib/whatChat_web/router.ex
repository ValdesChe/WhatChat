defmodule WhatChatWeb.Router do
  use WhatChatWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", WhatChatWeb do
    pipe_through :browser

    get "/", PageController, :index
  end

  scope "/users", WhatChatWeb do
    pipe_through(:api)

    resources "/", UserController, except: [:new, :edit]
  end

  scope "/accounts", WhatChatWeb do
    pipe_through(:api)

    post("/sign_in", SessionController, :create)
    delete("/sign_out", SessionController, :delete)
    get("/me", SessionController, :ping)
  end

  # Other scopes may use custom stacks.
  # scope "/api", WhatChatWeb do
  #   pipe_through :api
  # end
end
