defmodule WhatChat.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    import Supervisor.Spec
    # List all child processes to be supervised
    children = [
      # Start the Ecto repository
      WhatChat.Repo,
      # Start the endpoint when the application starts
      WhatChatWeb.Endpoint,
      # Starts a worker by calling: WhatChat.Worker.start_link(arg)
      # {WhatChat.Worker, arg},

      # Start UsersPresence 
      WhatChatWeb.ChatPresence,
      {WhatChatWeb.Utils.Monitors.Monitor, []}  
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: WhatChat.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    WhatChatWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
