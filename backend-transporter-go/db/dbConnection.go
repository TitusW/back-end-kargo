package database

import (
	"fmt"
	"log"
	"os"

	"github.com/TitusW/team4-kargo-excellerate/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Database struct {
	connection *gorm.DB
}

func (db *Database) Connect(l *log.Logger) {
	dbh := os.Getenv("DATABASE_HOST")
	dbp := os.Getenv("DATABASE_PORT")
	dbu := os.Getenv("DATABASE_USER")
	dbpw := os.Getenv("DATABASE_PASS")
	dsn := dbu + ":" + dbpw + "@tcp(" + dbh + ":" + dbp + ")/kargo?charset=utf8mb4&parseTime=True&loc=Local"
	dbConn, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	db.connection = dbConn
	if err != nil {
		l.Fatalf("Failed to connect to MySQL %v", err)
	}

	db.connection.AutoMigrate(&models.Driver{})
	db.connection.AutoMigrate(&models.Truck{})
	fmt.Println(dsn)
}

func (db *Database) Close(l *log.Logger) {
	l.Println("Closing DB connection")
}
