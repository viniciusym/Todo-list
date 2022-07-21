const todo = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  })
}