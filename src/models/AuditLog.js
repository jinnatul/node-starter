import { DataTypes } from 'sequelize';
import sequelize from '../config/Database';

const { STRING, INTEGER, JSONB } = DataTypes

const AuditLog = sequelize.define('audit_log', {
  user_id: INTEGER,
  ip_address: STRING,
  browser: STRING,
  service: STRING,
  resource: STRING,
  action: STRING,
  document: STRING,
  payload : JSONB
}, {
  timestamps: true,
  schema: process.env.Schema,
});

export default AuditLog;
