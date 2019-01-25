defmodule WhatChat.Discussions.ConversationUser do
  use Ecto.Schema
  import Ecto.Changeset

  defimpl Jason.Encoder, for: WhatChat.Discussions.ConversationUser do
    def encode(value, opts) do

      cond  do
        (Ecto.assoc_loaded?(value.conversation) && Ecto.assoc_loaded?(value.user) )->
          Jason.Encode.map(Map.take(value, [:id, :read_at, :user,:user_id, :conversation, :conversation_id]), opts)
        
        (!Ecto.assoc_loaded?(value.conversation) && Ecto.assoc_loaded?(value.user)) ->
          Jason.Encode.map(Map.take(value, [:id, :read_at, :user,:user_id]), opts)
        
        (Ecto.assoc_loaded?(value.conversation) && !Ecto.assoc_loaded?(value.user)) ->
          Jason.Encode.map(Map.take(value, [:id, :read_at, :conversation, :conversation_id]), opts)
        
        (!Ecto.assoc_loaded?(value.conversation) && !Ecto.assoc_loaded?(value.user)) ->
          Jason.Encode.map(Map.take(value, [:id, :read_at]), opts)
        
        
      end

    end
  end
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
