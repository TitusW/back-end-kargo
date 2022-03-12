package database

import (
	"log"
	"os"

	"github.com/TitusW/team4-kargo-excellerate/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

type Database struct {
	Connection *gorm.DB
}

func Connect(l *log.Logger) Database {
	dbh := os.Getenv("DATABASE_HOST")
	dbp := os.Getenv("DATABASE_PORT")
	dbu := os.Getenv("DATABASE_USER")
	dbpw := os.Getenv("DATABASE_PASS")
	dsn := dbu + ":" + dbpw + "@tcp(" + dbh + ":" + dbp + ")/kargo?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		l.Fatalf("Failed to connect to MySQL %v", err)
	}

	db.AutoMigrate(&models.Driver{})
	db.AutoMigrate(&models.Truck{})
	return Database{Connection: db}
}

func (db Database) Close(l *log.Logger) {
	l.Println("Closing DB connection")
}
