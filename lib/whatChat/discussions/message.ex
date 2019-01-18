defmodule WhatChat.Discussions.Message do
  use Ecto.Schema
  import Ecto.Changeset


  schema "messages" do
    field :content, :string
    field :is_deleted, :boolean, default: false
    field :from_id, :id
    field :conversation_id, :id

    timestamps()
  end

  @doc false
  def changeset(message, attrs) do
    message
    |> cast(attrs, [:content, :is_deleted])
    |> validate_required([:content, :is_deleted])
  end
end
