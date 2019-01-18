defmodule WhatChat.Discussions.Conversation do
  use Ecto.Schema
  import Ecto.Changeset


  schema "conversations" do
    field :name, :string
    field :profile, :string

    timestamps()
  end

  @doc false
  def changeset(conversation, attrs) do
    conversation
    |> cast(attrs, [:name, :profile])
    |> validate_required([:name, :profile])
  end
end
