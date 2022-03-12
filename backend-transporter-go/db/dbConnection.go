package database

import (
	"fmt"
	"log"
	"os"

	"github.com/TitusW/team4-kargo-excellerate/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connect() *gorm.DB {
	dbh := os.Getenv("DATABASE_HOST")
	dbp := os.Getenv("DATABASE_PORT")
	dbu := os.Getenv("DATABASE_USER")
	dbpw := os.Getenv("DATABASE_PASS")
	dsn := dbu + ":" + dbpw + "@tcp(" + dbh + ":" + dbp + ")/kargo?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to MySQL %v", err)
	}

	db.AutoMigrate(&models.Driver{})
	fmt.Println(dsn)
	return db

}
