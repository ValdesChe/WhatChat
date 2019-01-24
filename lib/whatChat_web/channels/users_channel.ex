require IEx;
defmodule WhatChatWeb.UsersChannel do
  use Phoenix.Channel
  alias WhatChatWeb.ChatPresence
  alias WhatChat.Repo
  alias WhatChat.Discussions

  defp count_user do
    nil
  end

  defp filterd_user_info(
    %{id: id, email: email, username: username, image: image, inserted_at: inserted_at},
    discussion_id
    ) do
      conversation_pivot_user = discussion_id
      |> Discussions.get_conversation_user_by_conversation_and_user_ids!(id) 

      %{ id: id, email: email, username: username, image: image, inserted_at: inserted_at, read_at: conversation_pivot_user.read_at}
    end

    defp put_is_group(conversation) do
      is_group = conversation.profile !== nil
      conversation
      |> Map.put(:is_group, is_group)
    end
    

    defp parse_it(conversation) do
      users = Enum.map(
        conversation.users,
        fn user -> filterd_user_info(user, conversation.id) end)

      conversation
      |> put_is_group
      |> Map.put(:users, users)
    end
    

  def join("users:join", _params, socket) do
    _user_id = socket.assigns.user_id
    discussions = 
      socket.assigns.user
      |> Repo.preload(conversations: [:users, :messages])
    
      IO.inspect(discussions)
    some = Enum.map(
      discussions.conversations,
      fn conversation -> parse_it(conversation) end)


    send(self(), :after_join)


    # broadcast!(socket, "users:#{socket.assigns.topic.id}:new", %{comment: comment})
    # send(self(), :after_join)
    {:ok, %{ discussions: some }, socket}
  end

  def handle_info(:after_join, socket) do
    ChatPresence.track_user_join(socket, current_user(socket))
    presences = ChatPresence.list(socket)
    
    push socket, "presence_state", presences
    #broadcast! socket, "user:joined", presences

    {:noreply, socket}

  end


  def handle_in("users:declare", %{"userInfo" => userInfo} , socket) do
    broadcast!(socket, "users:joined" , %{NewUserInfo: userInfo })
    {:reply, :ok, socket}
  end

  # The user want to add a new discussion/ conversation with someone
  def handle_in("users:newConversation", %{"contact_id" => contact_id} , socket) do
   
    {:reply, :ok, socket}
  end

  def current_user(socket) do
    socket.assigns.user
  end



end
