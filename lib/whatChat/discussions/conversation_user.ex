defmodule WhatChat.Discussions.ConversationUser do
  use Ecto.Schema
  import Ecto.Changeset


  schema "conversation_user" do
    field :read_at, :naive_datetime
    
    #   field :user_id, :id
    # field :conversation_id, :id


    belongs_to(:user, WhatChat.Accounts.User)
    belongs_to(:conversation, WhatChat.Discussions.Conversation)
  end

  @doc false
  def changeset(conversation_user, attrs) do
    conversation_user
    |> cast(attrs, [:read_at, :conversation_id, :user_id])
    |> validate_required([:read_at])
  end
end
