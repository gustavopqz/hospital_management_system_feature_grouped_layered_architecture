const dbName = process.env.MONGO_INITDB_DATABASE;

const appDb = db.getSiblingDB(dbName);

// evita erro se script rodar novamente
const existingUser = appDb.getUser("app_user");

if (!existingUser) {
  appDb.createUser({
    user: "app_user",
    pwd: "app_secure_password_123",
    roles: [
      {
        role: "readWrite",
        db: dbName
      }
    ]
  });
}