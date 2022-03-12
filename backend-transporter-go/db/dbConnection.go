package database

import (
	"fmt"
	"os"
)

func Connect() {
	dbh := os.Getenv("DATABASE_HOST")
	dbp := os.Getenv("DATABASE_PORT")
	dbu := os.Getenv("DATABASE_USER")
	dbpw := os.Getenv("DATABASE_PASS")
	dsn := dbu + ":" + dbpw + "@tcp"
	fmt.Println(dbh)

}
