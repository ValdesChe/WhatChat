defmodule WhatChat.Discussions.Conversation do
  use Ecto.Schema
  import Ecto.Changeset

  alias WhatChat.Accounts.User
  alias WhatChat.Discussions.ConversationUser
  alias WhatChat.Discussions.Message

  schema "conversations" do
    field :name, :string
    field :profile, :string

    many_to_many(:users, User, join_through: "conversation_user")
    has_many(:messages, Message)

    timestamps()
  end

  @doc false
  def changeset(conversation, attrs) do
    conversation
    |> cast(attrs, [:name, :profile])
    |> validate_required([:name, :profile])
  end
end
