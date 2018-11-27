defmodule WhatChat.Repo do
  use Ecto.Repo,
    otp_app: :whatChat,
    adapter: Ecto.Adapters.Postgres
end
