defmodule WhatChat.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :string
      add :email, :string
      add :image, :text
      add :password_hash, :string

      timestamps()
    end

    create unique_index(:users, [:email])
  end
end
