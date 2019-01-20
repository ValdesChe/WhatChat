defmodule WhatChat.Discussions.Conversation do
  use Ecto.Schema
  import Ecto.Changeset

  alias WhatChat.Accounts.User
  alias WhatChat.Discussions.ConversationUser
  alias WhatChat.Discussions.Message

  defimpl Jason.Encoder, for: WhatChat.Discussions.Conversation do
    def encode(value, opts) do
      IO.puts("JASAON COnversation **********--------")
      IO.inspect(value)

      cond  do
        (Ecto.assoc_loaded?(value.messages) && Ecto.assoc_loaded?(value.users) )->
          Jason.Encode.map(Map.take(value, [:id, :is_group, :name, :profile, :users, :messages, :inserted_at, :updated_at]), opts)
        
        (!Ecto.assoc_loaded?(value.messages) && Ecto.assoc_loaded?(value.users)) ->
          Jason.Encode.map(Map.take(value, [:id, :is_group, :name, :profile, :messages, :inserted_at, :updated_at]), opts)
         
        (Ecto.assoc_loaded?(value.messages) && !Ecto.assoc_loaded?(value.users)) ->
          Jason.Encode.map(Map.take(value, [:id, :is_group, :name, :profile, :users, :inserted_at, :updated_at]), opts)
        
        (!Ecto.assoc_loaded?(value.messages) && !Ecto.assoc_loaded?(value.users)) ->
          Jason.Encode.map(Map.take(value, [:id, :name, :profile, :inserted_at, :updated_at]), opts)
        
      end

    end
  end

  # @derive {Jason.Encoder, only: [:id, :name, :profile, :users, :messages, :inserted_at, :updated_at]}
  schema "conversations" do
    field :name, :string
    field :profile, :string

    many_to_many(:users, User, join_through: "conversation_user")
    has_many(:messages, Message)
    # has_many(:conversation_user, ConversationUser)

    timestamps()
  end

  @doc false
  def changeset(conversation, attrs) do
    conversation
    |> cast(attrs, [:name, :profile])
    |> validate_required([:name, :profile])
  end
end
