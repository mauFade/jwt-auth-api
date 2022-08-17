import { db } from "../database/sqlite";
import { InternalServerError } from "../utils/errors";

export class UserDAO {
  add = (user: any) => {
    return new Promise((resolve, reject) => {
      db.run(
        `
          INSERT INTO users (
            name,
            email,
            password
          ) VALUES (?, ?, ?)
        `,
        [user.name, user.email, user.password],
        (err: any, user: any) => {
          if (err) {
            reject(new InternalServerError("Error creating user"));
          }

          return resolve(user);
        }
      );
    });
  };

  idSearch = (id: number) => {
    return new Promise((resolve, reject) => {
      db.get(
        `
          SELECT *
          FROM usuarios
          WHERE id = ?
        `,
        [id],
        (err, user) => {
          if (err) {
            return reject("User not found");
          }

          return resolve(user);
        }
      );
    });
  };
}
