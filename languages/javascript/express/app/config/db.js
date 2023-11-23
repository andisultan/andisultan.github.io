class DB {
  constructor() {
    this.db = null;
  }

  connect() {
    this.db = new Database();
    this.db.connect();
  }

  disconnect() {
    this.db.disconnect();
  }
}