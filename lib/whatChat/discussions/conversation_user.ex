defmodule WhatChat.Discussions.ConversationUser do
  use Ecto.Schema
  import Ecto.Changeset


  schema "conversation_user" do
    field :read_at, :naive_datetime
    field :user_id, :id
    field :conversation_id, :id

    timestamps()
  end

  @doc false
  def changeset(conversation_user, attrs) do
    conversation_user
    |> cast(attrs, [:read_at])
    |> validate_required([:read_at])
  end
end
