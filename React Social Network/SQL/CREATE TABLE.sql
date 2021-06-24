CREATE DATABASE SocialNetworkReact

CREATE TABLE Users
(
	[Id] int IDENTITY(1, 1) NOT NULL PRIMARY KEY,
	[FirstName] nvarchar(32) NOT NULL CHECK(LEN(TRIM([FirstName])) <> 0),
	[LastName] nvarchar(32) NOT NULL CHECK(LEN(TRIM([LastName])) <> 0),
	[Username] nvarchar(30) NOT NULL CHECK(LEN(TRIM([Username])) > 6),
	[Password] nvarchar(30) NOT NULL CHECK(LEN([Password]) > 8),
	[City] nvarchar(30) NOT NULL CHECK(LEN(TRIM([City])) <> 0),
	[About] nvarchar(500) NOT NULL CHECK(LEN(TRIM([About])) <> 0),
	[Image] varbinary(MAX) NULL,
	[Email] nvarchar(50) NOT NULL CHECK(LEN(TRIM([Email])) <> 0) UNIQUE
)

SELECT *
FROM Users