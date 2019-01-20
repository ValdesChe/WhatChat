defmodule WhatChat.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias WhatChat.Discussions.Conversation
  alias WhatChat.Discussions.ConversationUser


  schema "users" do
    field :email, :string
    field :image, :string
    field :password, :string, virtual: true
    field :password_hash, :string
    field :username, :string

    many_to_many(:conversations, Conversation, join_through: "conversation_user")
    # has_many(:conversation_user, ConversationUser)
    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:username, :email, :image, :password])
    |> validate_required([:username, :email, :image, :password])
    |> unique_constraint(:email)
    |> validate_length(:password, min: 6)
    |> put_password_hash()
  end

  defp put_password_hash(
                          %Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset
                        ) do
    change(changeset, password_hash: Bcrypt.hash_pwd_salt(password))
  end

  defp put_password_hash(changeset) do
    changeset
  end

end
