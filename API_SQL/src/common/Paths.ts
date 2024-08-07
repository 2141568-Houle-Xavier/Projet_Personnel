/**
 * Express router paths go here.
 */


export default {
  Base: '/',
  Database: {
    Base : "/database",
    Get : "/all"
  },
  Table : {
    Base : "/table",
    Get: "/all/:nom"
  },
  Rangee : {
    Base : "/rangee",
    Get: "/all/:nom_bd/:nom_table/"
  },
  Console : {
    Base : "/console",
    Post: "/executer"
  }

} as const;
