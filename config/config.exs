# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :whatChat,
  ecto_repos: [WhatChat.Repo]

# Configures the endpoint
config :whatChat, WhatChatWeb.Endpoint,
  url: [host: System.get_env("APP_ORIGIN") || "localhost"],
  secret_key_base:  System.get_env("SECRET_KEY_BASE")  || "sNSxERAOLPrAU2Qrha8UMWVomN762GKmsZUCYk0piTOjSMLPeIrFUzMSNVoAJ37Q",
  render_errors: [view: WhatChatWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: WhatChat.PubSub, pool_size: 10, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
