FROM maven:3.9.9-eclipse-temurin-17 AS build

WORKDIR /backend

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn clean package

FROM openjdk:17-jdk-slim

COPY --from=build /backend/target/spring_demo-0.0.1-SNAPSHOT.jar /backend/

EXPOSE 8080

ENTRYPOINT ["java","-jar","/backend/spring_demo-0.0.1-SNAPSHOT.jar"]