defmodule WhatChat.Repo.Migrations.CreateConversations do
  use Ecto.Migration

  def change do
    create table(:conversations) do
      add :name, :string
      add :profile, :string

      timestamps()
    end

  end
end
