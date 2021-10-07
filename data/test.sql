DROP TABLE IF EXISTS items;
CREATE TABLE items (
    id        SERIAL PRIMARY KEY,
    card      INT,
    cardBackgroundImage  VARCHAR(255),
    itemImg  VARCHAR(255),
    companyLogo VARCHAR(255),
    salePercent INT,
    price       INT,
    currency VARCHAR(255),
    endDate VARCHAR(255),
    endTime VARCHAR(255),
    tabColor VARCHAR(255),
    buttonColor VARCHAR(255),
    pcs         INT,
    prize       VARCHAR(255),
    title       VARCHAR(255)
);
