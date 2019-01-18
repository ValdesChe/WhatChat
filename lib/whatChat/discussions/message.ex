defmodule WhatChat.Discussions.Message do
  use Ecto.Schema
  import Ecto.Changeset
  alias WhatChat.Discussions.Conversation

  schema "messages" do
    field :content, :string
    field :is_deleted, :boolean, default: false
    field :from_id, :id
    # field :conversation_id, :id
    belongs_to :conversations, Conversation

    timestamps()
  end

  @doc false
  def changeset(message, attrs) do
    message
    |> cast(attrs, [:content, :is_deleted, :conversation_id])
    |> validate_required([:content, :is_deleted])
  end
end
