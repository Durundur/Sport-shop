FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /sportshop

COPY . .

RUN sed -i 's/\r$//' gradlew
RUN chmod +x ./gradlew

RUN ./gradlew clean bootJar -x test

FROM eclipse-temurin:17-jre-alpine AS runner
WORKDIR /app

COPY --from=builder /sportshop/build/libs/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]