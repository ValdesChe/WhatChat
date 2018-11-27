# defmodule Valchat.ConversationController do
#   use Valchat.Web, :controller

#   #plug(Valchat.Plugs.RequireAuth when action in [:index])
#   def index(conn, params) do
#     IO.puts("+++++++")
#     IO.inspect(conn)
#     IO.puts("+++++++")
#     IO.inspect(params)
#     users = Valchat.Repo.all(
#       from u in Valchat.User,
#       where: u.id != 1,
#       select: [u.id, u.username]
#     )
#     [ user1 | _other] = users
#     render(conn, "index.json",user1)
#   end

# end
