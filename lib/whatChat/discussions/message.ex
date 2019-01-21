defmodule WhatChat.Discussions.Message do
  use Ecto.Schema
  import Ecto.Changeset
  alias WhatChat.Discussions.Conversation


  @derive {Jason.Encoder, only: [:id, :content, :is_deleted, :from_id, :conversation_id, :inserted_at, :updated_at]}
  schema "messages" do
    field :content, :string
    field :is_deleted, :boolean, default: false
    field :from_id, :id
    
    belongs_to :conversations, Conversation, foreign_key: :conversation_id

    timestamps()
  end

  @doc false
  def changeset(message, attrs) do
    message
    |> cast(attrs, [:content, :is_deleted, :from_id, :conversation_id])
    |> validate_required([:content, :from_id])
  end
end
