import { DataTypes } from "sequelize";
import sequelize from "../config/Database";

const { INTEGER, BOOLEAN } = DataTypes;

const UserRoleMaps = sequelize.define(
  "user_role_maps",
  {
    user_id: { type: INTEGER, allowNull: false },
    role_id: { type: INTEGER, allowNull: false },
    is_delete: { type: BOOLEAN, defaultValue: false },
  },
  {
    timestamps: true,
    schema: process.env.Schema,
  }
);

export default UserRoleMaps;
