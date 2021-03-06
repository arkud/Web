-- MySQL Script generated by MySQL Workbench
-- Thu May 28 03:30:58 2020
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`USER`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`USER` (
  `USER_ID` INT NULL,
  `NAME` VARCHAR(45) NULL,
  PRIMARY KEY (`USER_ID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`POST`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`POST` (
  `POST_ID` INT NULL,
  `DESRIPTION` MEDIUMTEXT NULL,
  `CREATED_AT` DATETIME NULL,
  `PHOTO_LINK` TINYTEXT NULL,
  `LIKES` INT NULL,
  `USER_ID` INT NULL,
  PRIMARY KEY (`POST_ID`),
  INDEX `USER_ID_idx` (`USER_ID` ASC) VISIBLE,
  CONSTRAINT `USER_ID`
    FOREIGN KEY (`USER_ID`)
    REFERENCES `mydb`.`USER` (`USER_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`TAGS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`TAGS` (
  `POST_ID` INT NULL,
  `TAGS` TINYTEXT NULL,
  INDEX `POST_ID_idx` (`POST_ID` ASC) VISIBLE,
  CONSTRAINT `POST_ID`
    FOREIGN KEY (`POST_ID`)
    REFERENCES `mydb`.`POST` (`POST_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `mydb`.`USER`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`USER` (`USER_ID`, `NAME`) VALUES (1, 'a');
INSERT INTO `mydb`.`USER` (`USER_ID`, `NAME`) VALUES (2, 'b');
INSERT INTO `mydb`.`USER` (`USER_ID`, `NAME`) VALUES (3, 'c');
INSERT INTO `mydb`.`USER` (`USER_ID`, `NAME`) VALUES (4, 'd');
INSERT INTO `mydb`.`USER` (`USER_ID`, `NAME`) VALUES (5, 'e');
INSERT INTO `mydb`.`USER` (`USER_ID`, `NAME`) VALUES (6, 'f');
INSERT INTO `mydb`.`USER` (`USER_ID`, `NAME`) VALUES (7, 'g');
INSERT INTO `mydb`.`USER` (`USER_ID`, `NAME`) VALUES (8, 'h');
INSERT INTO `mydb`.`USER` (`USER_ID`, `NAME`) VALUES (9, 'i');
INSERT INTO `mydb`.`USER` (`USER_ID`, `NAME`) VALUES (10, 'j');

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`POST`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`POST` (`POST_ID`, `DESRIPTION`, `CREATED_AT`, `PHOTO_LINK`, `LIKES`, `USER_ID`) VALUES (1, 'f#fg', '2020-05-01 23:00:00', '', 1, 10);
INSERT INTO `mydb`.`POST` (`POST_ID`, `DESRIPTION`, `CREATED_AT`, `PHOTO_LINK`, `LIKES`, `USER_ID`) VALUES (2, 'ff', '2020-05-02 23:00:00', NULL, 2, 9);
INSERT INTO `mydb`.`POST` (`POST_ID`, `DESRIPTION`, `CREATED_AT`, `PHOTO_LINK`, `LIKES`, `USER_ID`) VALUES (3, 'fff', '2020-05-03 23:00:00', NULL, 3, 8);
INSERT INTO `mydb`.`POST` (`POST_ID`, `DESRIPTION`, `CREATED_AT`, `PHOTO_LINK`, `LIKES`, `USER_ID`) VALUES (4, 'ffff', '2020-05-04 23:00:00', NULL, 4, 7);
INSERT INTO `mydb`.`POST` (`POST_ID`, `DESRIPTION`, `CREATED_AT`, `PHOTO_LINK`, `LIKES`, `USER_ID`) VALUES (5, 'fffff', '2020-05-05 23:00:00', NULL, 3, 6);
INSERT INTO `mydb`.`POST` (`POST_ID`, `DESRIPTION`, `CREATED_AT`, `PHOTO_LINK`, `LIKES`, `USER_ID`) VALUES (6, 'ffffff', '2020-05-06 23:00:00', NULL, 8, 5);
INSERT INTO `mydb`.`POST` (`POST_ID`, `DESRIPTION`, `CREATED_AT`, `PHOTO_LINK`, `LIKES`, `USER_ID`) VALUES (7, 'ffffff', '2020-05-07 23:00:00', NULL, 5, 4);
INSERT INTO `mydb`.`POST` (`POST_ID`, `DESRIPTION`, `CREATED_AT`, `PHOTO_LINK`, `LIKES`, `USER_ID`) VALUES (8, 'fffffff', '2020-05-08 23:00:00', NULL, 7, 3);
INSERT INTO `mydb`.`POST` (`POST_ID`, `DESRIPTION`, `CREATED_AT`, `PHOTO_LINK`, `LIKES`, `USER_ID`) VALUES (9, 'ffffffff', '2020-05-09 23:00:00', NULL, 3, 2);
INSERT INTO `mydb`.`POST` (`POST_ID`, `DESRIPTION`, `CREATED_AT`, `PHOTO_LINK`, `LIKES`, `USER_ID`) VALUES (10, 'fffffffff', '2020-05-10 23:00:00', NULL, 9, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `mydb`.`TAGS`
-- -----------------------------------------------------
START TRANSACTION;
USE `mydb`;
INSERT INTO `mydb`.`TAGS` (`POST_ID`, `TAGS`) VALUES (1, '#fg');

COMMIT;

