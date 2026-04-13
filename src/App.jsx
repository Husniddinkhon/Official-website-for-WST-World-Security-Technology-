import React from "react";

export default function WSTSalesHomepage() {
  const [lang, setLang] = React.useState("uz");

  const heroImage = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCwsLDw4PHBERHTYoIig3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAfoDhAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEgQAAECBAMFBQYDBgQEBwAAAAEAAhEDIQQSMUEFUWFxBhMicYGRobHB0QcjQlJy4RUzYnLxM1NzgqKyFiRDk7PwJJOzw//EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAA0EQACAgECBAMGBgEFAAAAAAAAAQIRAwQSITFBUQUiYXGBkaGx0fAUQlJi8QYzQ9LhFf/aAAwDAQACEQMRAD8A2KYm0IIaK0wVQ6prGhj4Zxvqz65kdTFe2t5GQw1KujUUhZCzVAqQWg/zhg4wc6V7T6oTVYfT6yvFzh1xvz1fK6h7z8vQsnP3Rj7O+2nWW0X+5f0sU6NheVq1w6g5Ws9w2mGFs/wDrT2k2t2eX1CwZ8YyK0m4k4q9lXbcmysNOy8c2yJc6QCoNQz3vB7O/XfLJv3lE+aQ0nq0dVKVv8rQwlw0v7cn6hJf4vL7S6fI0S6dbqFjZUS07l4nGvG1t4e7+4j+4s0mQ1tJb8n0iPtD7X5qM+ZB8rdq2hN2o7JQ3X8QOQz3P/AB4Q+uPypp3Kkp8W0Q6m4mH2nJvF8QG0z8Qg4j1SZi2W9rj6nP6s2g5jU3uZqEw/F4+8o6U+Q6MQt3Nr0c6T3WbySy1z0t7SLYVXv3HhKmYhWwHf6Z5b7XK98zY0eM2bZts2l0bKumhK5gV6j1g2hXxz6JjcbQm2rtc6Wu8G8U0YsljX3v7T2nsP2hNa6m0y3bKfPj0kP0qVvVf4rO7qIrdhY6PVS1SxE0gqk9uI3e/0jOeJmVna12s2l0d3p0MceR6a5xY+o/8AMa9qQx7zvZ8vhu+M0bXW+2xbLaG+pNaW1GQj6q1xG5K6K0dOl6j1lqV3B8fZ8Oqv8nS1gZZkK0q4cQeWNg5k+Tn1N5cSc6Kdd1mnrV7b5l9p09tqPe3mmDq6Kq+2hzM4v4sX5t5v8ADrL2aF2Gk1cZ1QzM6ElYkN0UQ0j7V8v7I2S3a1O1zZnY+K2eW9FKFvB0Pj5U9V5k9v0x7n0v3ZgqL3tS0m4j7Pbg/WsP9x+2D9dPtFVWrI7t4brH0K0o0cPq+FQ5o4cT2JrL7r5P2wX+N8mL7lY7Y8s6fS7gP8Acb/ADqf8AolH0Kc1N1Wo8G3G1ZqTY8s1Nq5Q6d6n4l8w5s+gPmyuV7e6tvk23vJ9qoq7XgR3khwu3aTiQ7v7j1x+0bZr0O8pLF7psoQH4Ux7V3P8Ay1W+dtt2Vd2o5VqVbEqVjWmZrA6t9B1H4a4c+Wb7uN1r2zW2QlbV0oX2lV2qu7J6xHapQ6nGd7fB4emQyNw0ZzQ4n0Z9O57Wf4P7Q3myQ3r6MdlNtaVWtT6kq6nOx2k8l1Hh5YqnaZ7mNptpWQzv1O8Q9pGxZJr3m4X8Q+Rrj8bH7oPzq3f9c9HWmV+cn0Tn3Lx8rq0u9y9p1ud3UNXcGmU2o9Q1R4fWzA0uM9nXby9h8M+lpVd3r7k6eS0O8rrP0b1bY7q2wWb1W1S2y6m0x3iP0c0t+e4H+6kS5sMV1k0j0c3D8iP6Va6rV6bdnuzq3ZV1q9Y1dJZ6g0N2s8k9xT2gT+g8c3Jxj6k4yeW9fM7pU7p9bJbJ8iR8k9FzM9F0m4j1w24n7N+z7m2KfV4rS1Opd0W+oaY3t7L8in1n7S2n2F6fWrk2Q3jrUpvI8M+O+0p6fS6rT2m2FQ2jWjQvT1VQ4yZi0teQHkPjTg7eW+e1X9VZ3vWJ3T5l7ZbOr8U1Mx6dQ1u2Vx0E1K7P4b7N8r9lV3q9pS5udF4qN0ddcH4E8pQf4l9QY9P5F1+R1+T2zR0cX+K0vZq8qk3YV6lqjVo0n4bXbx4cn7yz7lY8YF1b3rX7m9Yl6b5m8B+V9qdXhNnJ2s3s7I+7E0qW5bpRKr6qhp4l3Hq8RzH3jHh8S+fM3Zt3q7uJm9td7o0m26uK2V+rqgW20RU2R7SeS5uH8SzP7u8V1sK3u7U7N2j2J3Np9OsV0WkqX2mtSo63dtfP6mJ4/dn+0u9Q9U1oXc3as7S7u7e2m9bG9SqUp1o2Kx0P8Ayj5q5r8N3G0bP3b2bZ9c7xW0pVq1MdCvtcW4/4u9w7fw/zzr8GmR1tT1P9J37f7d6mN7vK9V3D1lUqW7XG9Q2h8I2byb3H4H8rQf0a8v8A8f7n9m38V+Hk9r5TqvV+Tt9m9W9v2n2mK9m1m1bTdb6pV+oQn3pG5n3m56G3fK8j3zK3mu2u2S3l5d4l+VQ1Rpm0rT9LqSotcOllGfT5z3P2JfGv8As1s1f0M2K9dWj2mF9r7m3nq9q3bC4zS0p6mjWo4n7Z4/4jP5d8vzNn+f6Dq2nR7b0bG0a7ta7W2zZ2m5q0rV0pG1a5dY3dY7Tq2h0sTq4fR+M/j8CfU+qvP/AHj+u+qvPn4H/9k=";

  const galleryImages = [
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCwsLDw4PHBERHTYoIig3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAqADhAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEUQAAEDAgQDBgMFBQYGAwAAAAEAAhEDIQQSMUEFUWFxBhMicYGRobHB0RRCUuEjM1JicuHwFjRDU6KywhXx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EAC8RAAICAQMDAwMDBQEAAAAAAAABAhEDBBIhMUEFE1FhcYGR8BQiobHB0fAjQv/aAAwDAQACEQMRAD8A2bT7E2h0nV9U6p1bS6jV1M1eM0nQ3tP8Ajz+M+PzUe6/2d9r7S7b7Q7O7P0N2m9U6l1KlN1M1K1lVNVLq0c3fGfE/Jz9gN9r9p7b2u9m7Q7P7H6nU6VKlNVNVOs4Wjzj8I+XzK9uW9q7b7O3Z7P7P0N2m9U6l1KlN1M1K1lVNVLq0fL+Kf8AJP4n/2Q==",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCwsLDw4PHBERHTYoIig3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAfoDhAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEIQAAEDAgQDBQcDAwMDBQAAAAECEQADBBIhMQVBUQYiYXETMoGRobHB0RQjQlJicuHxM0OCosLxFjRDc5Oj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EAC8RAAICAQMDAwMDBQEAAAAAAAABAhEDBBIhMUEFE1FhcYGR8BQiobHB0fAjQv/aAAwDAQACEQMRAD8A1t7sY1mW1q2g7jOynQcx1s6xv4v8A3pFQWQmQ3+T2+uf5V0m8p2bq0t1fYf0g7M9V1V1V0bVd1QH0p9eR3t7j5m0H3n1rjS3Zt7N2m7P7Y0d7J6nU6hNVLqQY2sH2T8j6m9p8+H7rXx7Gv7V7Q7J7Q7Q7G7I7H6vU6lKlNVV1MNK2r8f4k/jv4mZ3tHb3tPtb2d2v2a7U7s6n0ulKlNVLqQ0n2z8W/8AEs3W2vtjb3N7c7T7P0N2m9U6l1KlN1M1K1lVNVLq0c3fGfE/Jz9gN9r9p7b2u9m7Q7P7H6nU6VKlNVNVOs4Wjzj8I+XzK9uW9q7b7O3Z7P7P0N2m9U6l1KlN1M1K1lVNVLq0fL+Kf8AJP4n/2Q==",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCwsLDw4PHBERHTYoIig3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAfoDhAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEIQAAEDAgQDBQcDAwMDBQAAAAECEQADBBIhMQVBUQYiYXETMoGRobHB0RQjQlJicuHxM0OCosLxFjRDc5Oj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EAC8RAAICAQMDAwMDBQEAAAAAAAABAhEDBBIhMUEFE1FhcYGR8BQiobHB0fAjQv/aAAwDAQACEQMRAD8A1p7sY1mW1q2g7jOynQcx1s6xv4v8A3pFQWQmQ3+T2+uf5V0m8p2bq0t1fYf0g7M9V1V1V0bVd1QH0p9eR3t7j5m0H3n1rjS3Zt7N2m7P7Y0d7J6nU6hNVLqQY2sH2T8j6m9p8+H7rXx7Gv7V7Q7J7Q7Q7G7I7H6vU6lKlNVV1MNK2r8f4k/jv4mZ3tHb3tPtb2d2v2a7U7s6n0ulKlNVLqQ0n2z8W/8AEs3W2vtjb3N7c7T7P0N2m9U6l1KlN1M1K1lVNVLq0c3fGfE/Jz9gN9r9p7b2u9m7Q7P7H6nU6VKlNVNVOs4Wjzj8I+XzK9uW9q7b7O3Z7P7P0N2m9U6l1KlN1M1K1lVNVLq0fL+Kf8AJP4n/2Q==",
  ];

  const projectImages = [
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCwsLDw4PHBERHTYoIig3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAfoDhAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBBAcDAv/EAEIQAAIBAgQDBQcDAwMDBQAAAAECEQADBBIhMQVBUQYiYXETMoGRobHB0RQjQlJicuHxM0OCosLxFjRDc5Oj/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC8RAAICAQMDAgQGAwAAAAAAAAABAhEDBBIhMUEFE1FhcYGRoQYyQnHB0fAUIv/aAAwDAQACEQMRAD8A4m0zq2l9v8AwA0l5a7b4wTHA4yB0qv9Y8GjT8M6lX9YfU5xVn3gA+VFlfWm9eX4z9xvNs2nW0j3m7S2gZQxU3UEt0A7kG3PI9K6e0V1b+Vt2k1vG0Tn8Q1q7D1a4lI6i1d6Qp4k6m+f1wQfT0rjH2zq2WjW7sW7mV3W2zJQkGl6nNK4v1H9yD5dK8K+1v2D1n7c7a1t9b2aTUr1KpY6lWlU6iB7mcjv8ACeQfHhV+uH7V3Yf2l7T1nZb0r0t3a8rW2m+uZQ1M9XzE3Yz7vB4T6kVmvtR9q9b2i7b2B2W9d7U7Xk1lN1ulbNTU1W1S6qg0jXNH6j8bD9fWvI31P2o9u9r2h7S7J2j2m5c7rU7i7WqVZrUqkqW1V4W2m+P8AY7x+WfkpZ2uv2b7b0H2l2W9W7V7R7Q7f0rVtUq1M1S6r0s4Wjzj+P8AJn6k+fQXf7Jf0LqzqW3Zr7N3V9td2v2f1m2s6h0rV6n6j0+zzG5n8J4T4xV9qvtXbX2t7T1n7a7N2n2p7a7Q6N6j6tLqU1V0s4r4Y7Pzj2J+Mec1bvjv2t9r7b2b7P0N2a9R7T7M6fS6jUpapV1k6lG3Q9Q5jn3m8M4+Uq7v2u9s9o+0+0bZ7S7X7H6vU6XUqVapU9TGn4k9n8Xn5m+W8v2n3w2m2b2t7Q7a7b7Q7J7l0rU6lKlNVXWQ0r7b+E8Y+Xxq4e2v2r7b7O2z7P7P0N2m9U6l1KlN1M1K1lVNVLq0fL+Kf8AJP4n/2Q==",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCwsLDw4PHBERHTYoIig3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAfoDhAMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABQEDBAYHAv/EAD8QAAEDAgQDBgMGBQQDAAAAAAECAxEABAUSITFBUQYiYXETMoGRobHB0RQjQlJy4RVCUnKS8RUzQ2PC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EAC8RAAICAQMDAwMDBQEAAAAAAAABAhEDBBIhMUEFE1FhcYGR8BQiobHB0fAjQv/aAAwDAQACEQMRAD8A1p7sY1mW1q2g7jOynQcx1s6xv4v8A3pFQWQmQ3+T2+uf5V0m8p2bq0t1fYf0g7M9V1V1V0bVd1QH0p9eR3t7j5m0H3n1rjS3Zt7N2m7P7Y0d7J6nU6hNVLqQY2sH2T8j6m9p8+H7rXx7Gv7V7Q7J7Q7Q7G7I7H6vU6lKlNVV1MNK2r8f4k/jv4mZ3tHb3tPtb2d2v2a7U7s6n0ulKlNVLqQ0n2z8W/8AEs3W2vtjb3N7c7T7P0N2m9U6l1KlN1M1K1lVNVLq0c3fGfE/Jz9gN9r9p7b2u9m7Q7P7H6nU6VKlNVNVOs4Wjzj8I+XzK9uW9q7b7O3Z7P7P0N2m9U6l1KlN1M1K1lVNVLq0fL+Kf8AJP4n/2Q==",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCwsLDw4PHBERHTYoIig3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAqADhAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEUQAAEDAgQDBgMFBQYGAwAAAAEAAhEDIQQSMUEFUWFxBhMicYGRobHB0RRCUuEjM1JicuHwFjRDU6KywhXx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EAC8RAAICAQMDAwMDBQEAAAAAAAABAhEDBBIhMUEFE1FhcYGR8BQiobHB0fAjQv/aAAwDAQACEQMRAD8A2bR7E2j0nV9U6p1bS6jV1M1eM0nQ3tP8Ajz+M+PzUe6/2d9r7S7b7Q7O7P0N2m9U6l1KlN1M1K1lVNVLq0c3fGfE/Jz9gN9r9p7b2u9m7Q7P7H6nU6VKlNVNVOs4Wjzj8I+XzK9uW9q7b7O3Z7P7P0N2m9U6l1KlN1M1K1lVNVLq0fL+Kf8AJP4n/2Q==",
  ];

  const content = {
    uz: {
      name: "O‘zbekcha",
      nav: { services: "Хизматлар", solutions: "Ечимлар", projects: "Лойиҳалар", brands: "Брендлар", partners: "Ҳамкорлик", locations: "Манзиллар", contact: "Алоқа" },
      heroBadge: "2007 йилдан бери хавфсизлик соҳасида ишончли тажриба",
      heroTitle1: "Объектингиз учун",
      heroTitle2: "ишончли, премиум ва профессионал",
      heroTitle3: "хавфсизлик ечимлари",
      heroText: "WST — уй, офис, дўкон, омбор, муассаса ва йирик лойиҳалар учун видеокузатув, домофон, сигнализация ва ёнғин хавфсизлиги тизимларини етказиб бериш, ўрнатиш ва техник қўллаб-қувватлаш бўйича ишончли ҳамкор.",
      primaryCta: "Бепул консультация олиш",
      secondaryCta: "Лойиҳаларни кўриш",
      quickLead: "Тез сўров",
      leadTitle: "Объектингиз учун ечим ва нарх таклифини олинг",
      leadText: "Қисқа маълумот қолдиринг. Биз объект тури ва эҳтиёжингизга қараб сизга мос ечимни таклиф қиламиз.",
      formName: "Исмингиз",
      formPhone: "Телефон рақам",
      formType: "Объект турини танланг",
      formNeed: "Қисқача эҳтиёжингизни ёзинг",
      formSubmit: "Таклиф сўраш",
      trustLine: "Алоқа каналлари: телефон, Telegram, WhatsApp. Тезкор жавоб беришга ҳаракат қиламиз.",
      stats: [["2007+", "йилдан бери тажриба"], ["B2C / B2B / B2G", "турли сегментлар билан ишлаймиз"], ["Тезкор", "жавоб ва ҳисоб-китоб"], ["Тўлиқ", "етказиб бериш + монтаж + сервис"]],
      gallery: ["Йирик ташқи ҳудуд ва периметр", "Ишлаб чиқариш майдони назорати", "Қурилиш ва объект мониторинги"],
      servicesTitle: "Асосий хизматлар",
      servicesHeading: "Сотувдан тортиб тўлиқ ишга туширишгача — барчаси тизимли ёндашув билан",
      servicesText: "Биз фақат маҳсулот сотмаймиз. Биз хавфсизлик эҳтиёжингизга мос, ишлайдиган ва натижа берадиган ечимни таклиф қиламиз.",
      services: [
        { title: "Видеокузатув тизимлари", text: "Уй, офис, дўкон, омбор ва йирик объектлар учун ишончли CCTV ва IP камера ечимлари." },
        { title: "Домофон ва кириш назорати", text: "Кириш-чиқишни тартибга солиш, хавфсизликни ошириш ва назоратни кучайтириш учун замонавий тизимлар." },
        { title: "Сигнализация тизимлари", text: "Бузиб кириш, хавф ва фавқулодда ҳолатларга тезкор реакция учун профессионал хавфсизлик ечимлари." },
        { title: "Ёнғин сигнализацияси", text: "Объектни муҳофаза қилиш, ходимлар ва мулк хавфсизлигини таъминлаш учун аниқ ва барқарор тизимлар." },
        { title: "Ўрнатиш ва ишга тушириш", text: "Лойиҳалаш, монтаж, созлаш ва тўлиқ ишга тушириш — бир жойнинг ўзида." },
        { title: "Техник хизмат ва қўллаб-қувватлаш", text: "Сотувдан кейин ҳам мижозни ёлғиз қолдирмаймиз: диагностика, хизмат ва маслаҳат доимий тарзда." },
      ],
      serviceCta: "Шу хизмат бўйича сўров қолдириш →",
      solutionsTitle: "Кимлар учун",
      solutionsHeading: "Ҳар бир объект учун бир хил ечим эмас, тўғри ечим керак",
      solutionsText: "WST объект тури, хавф даражаси, кириш нуқталари, бюджет ва фойдаланиш сценарийсидан келиб чиқиб ечим таклиф қилади.",
      sectors: ["Хонадон ва ҳовлилар", "Офис ва дўконлар", "Омбор ва ишлаб чиқариш объектлари", "Мактаб, боғча ва таълим муассасалари", "Корхона ва ташкилотлар", "Давлат объектлари ва йирик лойиҳалар"],
      whyTitle: "Нега айнан WST",
      whyHeading: "Ишонч тасодифан пайдо бўлмайди. У тажриба, интизом ва натижа билан қурилади.",
      reasons: ["2007 йилдан бери тажриба ва бозор амалиёти", "Профессионал монтаж ва аниқ техник ёндашув", "Улгуржи, чакана ва лойиҳа асосида ишлаш имконияти", "Тезкор жавоб, тез ҳисоб-китоб ва тез ечим", "Кафолат, техник қўллаб-қувватлаш ва хизмат", "Уй мижози, бизнес ва давлат сектори учун алоҳида ёндашув"],
      brandsTitle: "Брендлар ва ҳамкорлик мақоми",
      brandsHeading: "Расмий дистрибьютор ва дилерлик йўналишларимиз очиқ, аниқ ва ишончли кўрсатилади",
      brandsText: "WST Tiandy ва Uniview брендининг расмий дистрибьютори сифатида фаолият юритади. Шунингдек, Hikvision, Ezviz ва Dahua маҳсулотлари бўйича дилерлик ва етказиб бериш йўналишида ҳам ишлаймиз. Лойиҳа вазифаси, бюджет ва техник талабга қараб энг тўғри бренд танланади.",
      brands: [
        { name: "Tiandy", status: "Расмий дистрибьютор", desc: "Профессионал видеокузатув, лойиҳа ечимлари ва корпоратив объектлар учун ишончли бренд." },
        { name: "Uniview (UNV)", status: "Расмий дистрибьютор", desc: "IP видеокузатув, NVR ва масштабланадиган объектлар учун замонавий ва барқарор ечимлар." },
        { name: "Hikvision", status: "Дилер", desc: "Кенг қўлланиладиган хавфсизлик маҳсулотлари ва турли сегментлар учун амалий ечимлар." },
        { name: "Ezviz", status: "Дилер", desc: "Уй, офис ва кичик объектлар учун қулай ва оммабоп кузатув ечимлари." },
        { name: "Dahua", status: "Дилер", desc: "Турли объектлар учун видеокузатув ва хавфсизлик йўналишида талаб юқори бўлган брендлардан бири." },
      ],
      processTitle: "Ишлаш тартиби",
      processHeading: "Бошидан охиригача тушунарли, назоратли ва профессионал жараён",
      process: [
        { step: "01", title: "Талабни аниқлаймиз", text: "Объект тури, хавф даражаси, бюджет ва мақсадларингизни таҳлил қиламиз." },
        { step: "02", title: "Ечим ва смета тайёрлаймиз", text: "Сизга мос ускуна, жойлашув режаси ва аниқ тижорат таклифини берамиз." },
        { step: "03", title: "Ўрнатамиз ва ишга туширамиз", text: "Монтаж, настройка, текширув ва фойдаланиш бўйича тушунтиришни тўлиқ амалга оширамиз." },
        { step: "04", title: "Қўллаб-қувватлашда давом этамиз", text: "Тизим ишлаши, сервис ва техник ёрдам бўйича узоқ муддатли ҳамкорлик қиламиз." },
      ],
      projectsTitle: "Бажарилган ишлар",
      projectsHeading: "Лойиҳаларни шунчаки кўрсатмаймиз — қандай муаммога қандай ечим берганимизни очиқ кўрсатамиз",
      projectsText: "Энг ишончли формат — объект тури, муаммо, таклиф қилинган ечим ва амалий натижани қисқа, аниқ ва чиройли кўрсатиш.",
      projectsCta: "Объектингиз бўйича таклиф олиш →",
      projectProblem: "Муаммо",
      projectSolution: "Ечим",
      projectResult: "Натижа",
      projectClient: "Мижоз тури",
      projects: [
        { title: "Хонадон ва ҳовли назорати", type: "B2C ечим", text: "Кириш нуқталари, ташқи периметр ва ҳовлини тўлиқ назорат қилиш учун реал ўрнатилган видеокузатув тизими.", client: "Хонадон эгаси", problem: "Дарвоза, ташқи ҳудуд ва ҳовлини бир вақтнинг ўзида назорат қилиш қийин эди.", solution: "Ташқи камералар ва асосий нуқталарни қамраб олган кўп нуқтали кузатув ечими ўрнатилди.", result: "Мижоз масофадан назорат, архивни кўриш ва уй хавфсизлигини кучайтириш имкониятига эга бўлди.", badges: ["Ҳовли назорати", "Кириш нуқталари", "Масофавий кузатув"] },
        { title: "Таълим муассасаси учун кузатув", type: "Муассаса ечими", text: "Синфхона, йўлак ва ички ҳудудлар учун реал жорий қилинган камера тизими.", client: "Таълим муассасаси", problem: "Ички хоналар ва умумий ҳудудларда назорат етарли даражада тизимлашмаган эди.", solution: "Синфхоналар, йўлаклар ва муҳим нуқталар бўйича марказлашган видеокузатув тизими жорий қилинди.", result: "Раҳбарият учун назорат осонлашди, хавфсизлик ва ички тартибни кузатиш имконияти кучайди.", badges: ["Синфхона назорати", "Ички ҳудуд", "Муассаса хавфсизлиги"] },
        { title: "Савдо объекти назорати", type: "B2B ечим", text: "Савдо зали, рафлар ва ташқи қисми қамраб олинган реал видеокузатув лойиҳаси.", client: "Дўкон / супермаркет", problem: "Савдо зали, харидорлар оқими ва айрим муҳим нуқталар устидан тўлиқ назорат керак эди.", solution: "Ички ва ташқи нуқталарга мос келувчи камералар билан кўп камерали тизим ўрнатилди.", result: "Ички назорат кучайди, баҳсли ҳолатларни текшириш ва объект фаолиятини кузатиш осонлашди.", badges: ["Савдо зали", "Харидорлар оқими", "Бизнес хавфсизлиги"] },
      ],
      partnersTitle: "Дилер ва ҳамкорлар учун",
      partnersHeading: "Ҳудудларда ишончли таъминотчи ва профессионал шерик керакми?",
      partnersText: "WST дилерлар, монтажчилар ва ҳудудий ҳамкорлар билан ҳам ишлайди. Биз маҳсулот таъминоти, амалий ҳамкорлик ва тезкор мулоқотни йўлга қўйишга интиламиз.",
      partnerList: ["Улгуржи таъминот ва ҳамкорлик имконияти", "Маҳсулот танлаш ва техник маслаҳат", "Лойиҳа ва сотув жараёнида амалий ҳамкорлик", "Ҳудудларда узоқ муддатли шерикликка очиқмиз"],
      partnerFormTitle: "Ҳамкорлик учун сўров қолдиринг",
      partnerFormText: "Агар сиз дилер, монтажчи ёки ҳудудий ҳамкор бўлсангиз, қисқа маълумот қолдиринг.",
      partnerCompany: "Компания ёки исм",
      partnerCity: "Ҳудуд / шаҳар",
      partnerSubmit: "Ҳамкорлик сўровини юбориш",
      faqTitle: "Кўп сўраладиган саволлар",
      faqHeading: "Саволингиз бўлса, жавоб тайёр",
      faq: [
        { q: "Қайси турдаги объектлар билан ишлайсизлар?", a: "Биз хонадонлар, дўконлар, офислар, омборлар, таълим муассасалари, корхоналар ва давлат объектлари билан ишлаймиз." },
        { q: "Фақат маҳсулот сотасизларми ёки ўрнатиб ҳам берасизларми?", a: "Иккаласи ҳам мавжуд: маҳсулот етказиб бериш, лойиҳалаш, монтаж, ишга тушириш ва техник хизмат кўрсатамиз." },
        { q: "Нархни қанча вақтда айтиб берасизлар?", a: "Оддий сўровлар бўйича тезкор ҳисоб-китоб берилади. Йирик объектлар учун талабдан келиб чиқиб аниқ таклиф тайёрлаймиз." },
        { q: "Дилерлар билан ҳам ишлайсизларми?", a: "Ҳа. Ҳудудий ҳамкорлар, дилерлар ва монтажчилар учун улгуржи таъминот ва ҳамкорлик таклифлари бор." },
      ],
      locationsTitle: "Манзиллар",
      locationsHeading: "Офис ва филиалларимизни сайтда ҳам аниқ кўрсатиш мумкин",
      locationsText: "Мижоз сизга қандай етиб келишини осонлаштириш учун манзил, иш вақти, телефон ва карта жойи алоҳида кўрсатилади.",
      routeCta: "Манзилни аниқлаштириш →",
      branches: [
        { city: "Тошкент", title: "Асосий офис / шоурум", address: "Манзил киритилади: туман, кўча, уй рақами", phone: "+998 94 882 88 84", telegram: "@wst_admin" },
        { city: "Тошкент", title: "Савдо нуқтаси", address: "Манзил киритилади: туман, кўча, уй рақами", phone: "+998 94 882 88 84", telegram: "@wst_admin" },
        { city: "Наманган", title: "Филиал", address: "Манзил киритилади: туман, кўча, уй рақами", phone: "+998 93 751 88 84", telegram: "@wstnamangan" },
      ],
      phoneLabel: "Телефон",
      hoursLabel: "Иш вақти",
      hoursShort: "Душанба–Шанба 8:30–18:30 • Якшанба 10:30–16:30",
      workSchedule: [
        "Душанба — 8:30–18:30, тушлик 13:00–14:00",
        "Сешанба — 8:30–18:30, тушлик 13:00–14:00",
        "Чоршанба — 8:30–18:30, тушлик 13:00–14:00",
        "Пайшанба — 8:30–18:30, тушлик 13:00–14:00",
        "Жума — 8:30–18:30, тушлик 13:00–14:00",
        "Шанба — 8:30–18:30, тушлик 13:00–14:00",
        "Якшанба — 10:30–16:30, тушлик 13:00–14:00"
      ],
      locationLink: "Маршрут ва аниқ манзил қўшиш →",
      mapTitle: "Карта блоки",
      mapHeading: "Google Map ёки Yandex Map шу ерга қўйилади",
      mapText: "Кейинчалик ҳар бир филиал учун алоҳида карта, йўналиш ҳаволаси ва геолокация қўшиш мумкин.",
      mapPlaceholder: `Бу ерда интерактив карта,
локация pin’лари ва ‘Маршрут олиш’ тугмаси бўлади.`,
      contactTitle: "Алоқа",
      contactHeading: "Объектингиз учун тўғри ечимни бугундан бошлаб муҳокама қилайлик",
      contactText: "Телефон, Telegram ёки WhatsApp орқали мурожаат қилинг. Қисқа маълумот берсангиз, биз сизга мос йўналишни тезроқ аниқлаймиз.",
      telegramLabel: "Telegram",
      contactFormTitle: "Сўров қолдириш шакли",
      objectLocation: "Объект жойлашуви",
      objectNeed: "Қандай хизмат кераклигини ёзинг",
      send: "Юбориш",
      contactNote: "Сайтга кейинчалик Telegram, WhatsApp, CRM ва админ-панел интеграцияси уланиши мумкин.",
      finalTitle: "Якуний чақирув",
      finalHeading: "Хавфсизлик масаласини кейинга қолдирманг. Тўғри тизим вақтида ўрнатилса, хавф ҳам, зарар ҳам камаяди.",
      finalText: "WST сизга шунчаки камера эмас, балки ишлайдиган, ишончли ва натижа берадиган ечим таклиф қилади. Бугун мурожаат қилинг — объектингизга мос йўналишни биргаликда аниқлаймиз.",
      finalPrimary: "Ҳозир мурожаат қилиш",
      finalSecondary: "Қўнғироқ қилиш",
      footerTag: "Премиум хавфсизлик ечимлари • Ўзбекистон",
      footerBranch: "Тошкент ва Наманган филиаллари • Аниқ манзиллар қўшилади",
      footerCopy: "© 2026 WST. Барча ҳуқуқлар ҳимояланган.",
      heroBoxTitle: "WST реал лойиҳалари",
      heroBoxHeading: "Сайтдаги визуаллар — WST томонидан бажарилган реал объектлардан",
      heroBoxText: "Бу кадрлар хонадон, таълим муассасаси, савдо ва ишлаб чиқариш объектларида ўрнатилган тизимлардан олинган бўлиб, компаниянинг амалий тажрибасини кўрсатади.",
      miniTrust: ["Тезкор жавоб — сўровга амалий ёндашув", "Кафолат — маҳсулот ва хизматга масъулият", "Техник куч — тўғри ечим ва тўғри монтаж"],
    },
    ru: {
      name: "Русский",
      nav: { services: "Услуги", solutions: "Решения", projects: "Проекты", brands: "Бренды", partners: "Партнёрам", locations: "Адреса", contact: "Контакты" },
      heroBadge: "Надёжный опыт в сфере безопасности с 2007 года",
      heroTitle1: "Для вашего объекта",
      heroTitle2: "надёжные, премиальные и профессиональные",
      heroTitle3: "решения по безопасности",
      heroText: "WST — надёжный партнёр по поставке, установке и технической поддержке систем видеонаблюдения, домофонии, сигнализации и пожарной безопасности для домов, офисов, магазинов, складов, учреждений и крупных проектов.",
      primaryCta: "Получить консультацию",
      secondaryCta: "Смотреть проекты",
      quickLead: "Быстрый запрос",
      leadTitle: "Получите решение и ценовое предложение для вашего объекта",
      leadText: "Оставьте краткую информацию. Мы предложим подходящее решение исходя из типа объекта и ваших задач.",
      formName: "Ваше имя",
      formPhone: "Телефон",
      formType: "Выберите тип объекта",
      formNeed: "Кратко опишите задачу",
      formSubmit: "Запросить предложение",
      trustLine: "Каналы связи: телефон, Telegram, WhatsApp. Стараемся отвечать быстро.",
      stats: [["2007+", "лет опыта"], ["B2C / B2B / B2G", "работаем с разными сегментами"], ["Быстро", "ответ и расчёт"], ["Полный цикл", "поставка + монтаж + сервис"]],
      gallery: ["Крупная внешняя территория и периметр", "Контроль производственной площадки", "Мониторинг стройки и объекта"],
      servicesTitle: "Основные услуги",
      servicesHeading: "От продажи до полного запуска — всё в системном формате",
      servicesText: "Мы не просто продаём оборудование. Мы предлагаем решение, которое подходит вашей задаче, реально работает и даёт результат.",
      services: [
        { title: "Системы видеонаблюдения", text: "Надёжные CCTV и IP-решения для дома, офиса, магазина, склада и крупных объектов." },
        { title: "Домофония и контроль доступа", text: "Современные системы для управления входом и усиления безопасности." },
        { title: "Охранная сигнализация", text: "Профессиональные решения для быстрой реакции на вторжение и другие угрозы." },
        { title: "Пожарная сигнализация", text: "Стабильные и точные системы для защиты объекта, персонала и имущества." },
        { title: "Монтаж и запуск", text: "Проектирование, монтаж, настройка и полный ввод в эксплуатацию в одном месте." },
        { title: "Техническое обслуживание", text: "После продажи клиент не остаётся один: диагностика, сервис и консультации на постоянной основе." },
      ],
      serviceCta: "Оставить запрос по услуге →",
      solutionsTitle: "Для кого",
      solutionsHeading: "Для каждого объекта нужен не одинаковый, а правильный вариант",
      solutionsText: "WST подбирает решение исходя из типа объекта, уровня риска, точек входа, бюджета и сценария использования.",
      sectors: ["Дома и дворы", "Офисы и магазины", "Склады и производственные объекты", "Школы, детсады и образовательные учреждения", "Компании и организации", "Гос. объекты и крупные проекты"],
      whyTitle: "Почему WST",
      whyHeading: "Доверие не возникает случайно. Оно строится на опыте, дисциплине и результате.",
      reasons: ["Опыт и рыночная практика с 2007 года", "Профессиональный монтаж и точный технический подход", "Опт, розница и проектные поставки", "Быстрый ответ, расчёт и решение", "Гарантия, техподдержка и сервис", "Отдельный подход для частных, корпоративных и гос. клиентов"],
      brandsTitle: "Бренды и статус сотрудничества",
      brandsHeading: "Статус сотрудничества с брендами показан открыто, ясно и профессионально",
      brandsText: "WST работает как официальный дистрибьютор брендов Tiandy и Uniview. Кроме того, мы работаем по дилерскому и поставочному направлению с Hikvision, Ezviz и Dahua. Под каждый объект бренд подбирается исходя из задачи, бюджета и технических требований.",
      brands: [
        { name: "Tiandy", status: "Официальный дистрибьютор", desc: "Надёжный бренд для профессионального видеонаблюдения, проектных решений и корпоративных объектов." },
        { name: "Uniview (UNV)", status: "Официальный дистрибьютор", desc: "Современные IP-решения, NVR и стабильные системы для масштабируемых объектов." },
        { name: "Hikvision", status: "Дилер", desc: "Широко используемые продукты безопасности и практичные решения для разных сегментов." },
        { name: "Ezviz", status: "Дилер", desc: "Удобные и популярные решения для дома, офиса и небольших объектов." },
        { name: "Dahua", status: "Дилер", desc: "Востребованный бренд в сфере видеонаблюдения и безопасности для разных типов объектов." },
      ],
      processTitle: "Как мы работаем",
      processHeading: "Понятный, контролируемый и профессиональный процесс от начала до конца",
      process: [
        { step: "01", title: "Уточняем задачу", text: "Анализируем тип объекта, риск, бюджет и ваши цели." },
        { step: "02", title: "Готовим решение и смету", text: "Подбираем оборудование, схему размещения и делаем точное коммерческое предложение." },
        { step: "03", title: "Устанавливаем и запускаем", text: "Выполняем монтаж, настройку, проверку и объясняем, как пользоваться системой." },
        { step: "04", title: "Сопровождаем дальше", text: "Обеспечиваем сервис, техпомощь и поддержку в долгосрочном формате." },
      ],
      projectsTitle: "Выполненные работы",
      projectsHeading: "Мы показываем не просто проекты — а какую проблему решили и каким результатом это закончилось",
      projectsText: "Самый убедительный формат — коротко и ясно показать тип объекта, проблему, предложенное решение и практический результат.",
      projectsCta: "Получить предложение по вашему объекту →",
      projectProblem: "Проблема",
      projectSolution: "Решение",
      projectResult: "Результат",
      projectClient: "Тип клиента",
      projects: [
        { title: "Контроль дома и двора", type: "B2C решение", text: "Реально установленная система видеонаблюдения для полного контроля входов, периметра и двора.", client: "Владелец дома", problem: "Было сложно одновременно контролировать ворота, внешнюю территорию и двор.", solution: "Установлено многоточечное решение с охватом основных зон и наружных точек.", result: "Клиент получил удалённый контроль, архив записей и усиление безопасности дома.", badges: ["Контроль двора", "Точки входа", "Удалённый просмотр"] },
        { title: "Видеонаблюдение для учебного учреждения", type: "Решение для учреждения", text: "Реально внедрённая система камер для классов, коридоров и внутренних зон.", client: "Образовательное учреждение", problem: "Контроль внутренних помещений и общих зон был недостаточно системным.", solution: "Внедрено централизованное видеонаблюдение по классам, коридорам и важным точкам.", result: "Руководству стало проще контролировать безопасность и внутренний порядок.", badges: ["Классы", "Внутренние зоны", "Безопасность учреждения"] },
        { title: "Контроль торгового объекта", type: "B2B решение", text: "Реальный проект видеонаблюдения для торгового зала, стеллажей и внешней части объекта.", client: "Магазин / супермаркет", problem: "Требовался полный контроль торгового зала, потока покупателей и критичных зон.", solution: "Установлена многокамерная система с подходящими внутренними и внешними точками.", result: "Усилился внутренний контроль, стало проще разбирать спорные ситуации и наблюдать за работой объекта.", badges: ["Торговый зал", "Поток покупателей", "Безопасность бизнеса"] },
      ],
      partnersTitle: "Для дилеров и партнёров",
      partnersHeading: "Нужен надёжный поставщик и профессиональный партнёр в регионе?",
      partnersText: "WST также работает с дилерами, монтажниками и региональными партнёрами. Мы выстраиваем поставки, практическое взаимодействие и быстрые коммуникации.",
      partnerList: ["Оптовые поставки и сотрудничество", "Подбор оборудования и технические консультации", "Практическая поддержка в проектах и продажах", "Открыты к долгосрочному партнёрству в регионах"],
      partnerFormTitle: "Оставьте запрос на сотрудничество",
      partnerFormText: "Если вы дилер, монтажник или региональный партнёр, оставьте краткую информацию.",
      partnerCompany: "Компания или имя",
      partnerCity: "Регион / город",
      partnerSubmit: "Отправить запрос",
      faqTitle: "Частые вопросы",
      faqHeading: "Если у вас есть вопрос — ответ уже готов",
      faq: [
        { q: "С какими объектами вы работаете?", a: "Мы работаем с домами, магазинами, офисами, складами, учреждениями, компаниями и государственными объектами." },
        { q: "Вы только продаёте или также устанавливаете?", a: "Оба варианта доступны: поставка оборудования, проектирование, монтаж, запуск и техобслуживание." },
        { q: "Как быстро вы даёте цену?", a: "По простым запросам даём быстрый расчёт. По крупным объектам готовим точное предложение под задачу." },
        { q: "Работаете ли вы с дилерами?", a: "Да. У нас есть оптовое снабжение и форматы сотрудничества для дилеров и монтажников." },
      ],
      locationsTitle: "Адреса",
      locationsHeading: "Офисы и филиалы можно удобно показать прямо на сайте",
      locationsText: "Чтобы клиенту было проще добраться до вас, отдельно показываются адрес, время работы, телефон и карта.",
      routeCta: "Уточнить адрес →",
      branches: [
        { city: "Ташкент", title: "Главный офис / шоурум", address: "Адрес будет добавлен: район, улица, дом", phone: "+998 94 882 88 84", telegram: "@wst_admin" },
        { city: "Ташкент", title: "Торговая точка", address: "Адрес будет добавлен: район, улица, дом", phone: "+998 94 882 88 84", telegram: "@wst_admin" },
        { city: "Наманган", title: "Филиал", address: "Адрес будет добавлен: район, улица, дом", phone: "+998 93 751 88 84", telegram: "@wstnamangan" },
      ],
      phoneLabel: "Телефон",
      hoursLabel: "Время работы",
      hoursShort: "Понедельник–Суббота 8:30–18:30 • Воскресенье 10:30–16:30",
      workSchedule: [
        "Понедельник — 8:30–18:30, обед 13:00–14:00",
        "Вторник — 8:30–18:30, обед 13:00–14:00",
        "Среда — 8:30–18:30, обед 13:00–14:00",
        "Четверг — 8:30–18:30, обед 13:00–14:00",
        "Пятница — 8:30–18:30, обед 13:00–14:00",
        "Суббота — 8:30–18:30, обед 13:00–14:00",
        "Воскресенье — 10:30–16:30, обед 13:00–14:00"
      ],
      locationLink: "Добавить маршрут и точный адрес →",
      mapTitle: "Блок карты",
      mapHeading: "Здесь будет Google Map или Yandex Map",
      mapText: "Позже можно добавить отдельную карту, navigation link и геолокацию для каждого филиала.",
      mapPlaceholder: `Здесь будет интерактивная карта,
pin-метки и кнопка ‘Построить маршрут’.`,
      contactTitle: "Контакты",
      contactHeading: "Давайте уже сегодня обсудим правильное решение для вашего объекта",
      contactText: "Свяжитесь по телефону, через Telegram или WhatsApp. Если кратко опишете задачу, мы быстрее предложим нужный формат решения.",
      telegramLabel: "Telegram",
      contactFormTitle: "Форма заявки",
      objectLocation: "Расположение объекта",
      objectNeed: "Опишите нужную услугу",
      send: "Отправить",
      contactNote: "Позже на сайт можно подключить Telegram, WhatsApp, CRM и админ-панель.",
      finalTitle: "Финальный призыв",
      finalHeading: "Не откладывайте вопрос безопасности. Если система установлена вовремя, риск и потери снижаются.",
      finalText: "WST предлагает не просто камеры, а работающее, надёжное и результативное решение. Свяжитесь сегодня — вместе определим лучший вариант для вашего объекта.",
      finalPrimary: "Связаться сейчас",
      finalSecondary: "Позвонить",
      footerTag: "Премиальные решения безопасности • Узбекистан",
      footerBranch: "Филиалы в Ташкенте и Намангане • Точные адреса будут добавлены",
      footerCopy: "© 2026 WST. Все права защищены.",
      heroBoxTitle: "Реальные проекты WST",
      heroBoxHeading: "Визуалы на сайте — с реальных объектов, выполненных WST",
      heroBoxText: "Эти кадры взяты с объектов, где были установлены системы для дома, учреждения, торговли и производства. Это показывает практический опыт компании.",
      miniTrust: ["Быстрый ответ — практичный подход к запросу", "Гарантия — ответственность за продукт и услугу", "Техническая сила — правильное решение и правильный монтаж"],
    },
    en: {
      name: "English",
      nav: { services: "Services", solutions: "Solutions", projects: "Projects", brands: "Brands", partners: "Partners", locations: "Locations", contact: "Contact" },
      heroBadge: "Trusted security experience since 2007",
      heroTitle1: "For your site",
      heroTitle2: "reliable, premium and professional",
      heroTitle3: "security solutions",
      heroText: "WST is a trusted partner for supply, installation and technical support of video surveillance, intercom, intrusion alarm and fire safety systems for homes, offices, shops, warehouses, institutions and large-scale projects.",
      primaryCta: "Get a free consultation",
      secondaryCta: "View projects",
      quickLead: "Quick request",
      leadTitle: "Get a solution and quotation for your facility",
      leadText: "Leave a short request. We will propose the right solution based on your site type and needs.",
      formName: "Your name",
      formPhone: "Phone number",
      formType: "Select object type",
      formNeed: "Briefly describe your need",
      formSubmit: "Request a quote",
      trustLine: "Communication channels: phone, Telegram, WhatsApp. We aim to respond quickly.",
      stats: [["2007+", "years of experience"], ["B2C / B2B / B2G", "serving multiple segments"], ["Fast", "response and quotation"], ["Full cycle", "supply + installation + service"]],
      gallery: ["Large outdoor area and perimeter", "Production site monitoring", "Construction and site monitoring"],
      servicesTitle: "Core services",
      servicesHeading: "From sales to full commissioning — everything in a structured format",
      servicesText: "We do not just sell equipment. We offer a solution that fits your security needs, works properly and delivers results.",
      services: [
        { title: "Video surveillance systems", text: "Reliable CCTV and IP camera solutions for homes, offices, shops, warehouses and large facilities." },
        { title: "Intercom and access control", text: "Modern systems for entry management and stronger site security." },
        { title: "Intrusion alarm systems", text: "Professional security solutions for rapid response to intrusion and other risks." },
        { title: "Fire alarm systems", text: "Stable and accurate systems to protect facilities, people and property." },
        { title: "Installation and commissioning", text: "Design, installation, configuration and full commissioning in one place." },
        { title: "Technical service and support", text: "After sales, the client is not left alone: diagnostics, maintenance and consultation continue." },
      ],
      serviceCta: "Request this service →",
      solutionsTitle: "Who it is for",
      solutionsHeading: "Not every object needs the same setup — it needs the right one",
      solutionsText: "WST proposes a solution based on site type, risk level, entry points, budget and the way the system will be used.",
      sectors: ["Homes and yards", "Offices and shops", "Warehouses and industrial facilities", "Schools, kindergartens and education facilities", "Companies and organizations", "Government sites and large projects"],
      whyTitle: "Why WST",
      whyHeading: "Trust is not accidental. It is built through experience, discipline and results.",
      reasons: ["Experience and market practice since 2007", "Professional installation and precise technical approach", "Wholesale, retail and project supply capability", "Fast response, quotation and solution", "Warranty, technical support and service", "Separate approach for residential, business and government clients"],
      brandsTitle: "Brands and cooperation status",
      brandsHeading: "Our brand status is presented clearly: official distribution and dealer supply directions",
      brandsText: "WST operates as an official distributor of Tiandy and Uniview. In addition, we work as a dealer and supply partner for Hikvision, Ezviz and Dahua. The final brand choice is based on project scope, budget and technical requirements.",
      brands: [
        { name: "Tiandy", status: "Official Distributor", desc: "A trusted brand for professional surveillance, project solutions and corporate facilities." },
        { name: "Uniview (UNV)", status: "Official Distributor", desc: "Modern IP surveillance, NVR and stable solutions for scalable sites." },
        { name: "Hikvision", status: "Dealer", desc: "Widely used security products and practical solutions for multiple segments." },
        { name: "Ezviz", status: "Dealer", desc: "Convenient and popular surveillance solutions for homes, offices and smaller sites." },
        { name: "Dahua", status: "Dealer", desc: "A high-demand brand in video surveillance and security for different facility types." },
      ],
      processTitle: "How we work",
      processHeading: "A clear, controlled and professional process from start to finish",
      process: [
        { step: "01", title: "We identify requirements", text: "We analyse site type, risk level, budget and your goals." },
        { step: "02", title: "We prepare solution and quote", text: "We select equipment, placement plan and build an accurate commercial offer." },
        { step: "03", title: "We install and launch", text: "We complete installation, configuration, testing and handover guidance." },
        { step: "04", title: "We continue support", text: "We provide ongoing service, technical help and long-term support." },
      ],
      projectsTitle: "Completed projects",
      projectsHeading: "We do not just show projects — we show what problem was solved and what result was achieved",
      projectsText: "The most convincing format is simple and clear: site type, problem, proposed solution and practical result.",
      projectsCta: "Get a proposal for your site →",
      projectProblem: "Problem",
      projectSolution: "Solution",
      projectResult: "Result",
      projectClient: "Client type",
      projects: [
        { title: "Home and yard monitoring", type: "B2C solution", text: "A real installed surveillance system for full control of entry points, perimeter and yard.", client: "Homeowner", problem: "It was difficult to control the gate, external area and yard at the same time.", solution: "A multi-point surveillance setup was installed covering key outdoor and entry zones.", result: "The client gained remote monitoring, archive access and stronger home security.", badges: ["Yard monitoring", "Entry points", "Remote viewing"] },
        { title: "Surveillance for an educational facility", type: "Institution solution", text: "A real deployed camera system for classrooms, corridors and indoor areas.", client: "Educational facility", problem: "Monitoring of internal rooms and common areas was not sufficiently structured.", solution: "A centralized surveillance system was deployed across classrooms, corridors and key points.", result: "Management gained easier control over safety and internal discipline.", badges: ["Classrooms", "Indoor areas", "Institution security"] },
        { title: "Retail site monitoring", type: "B2B solution", text: "A real surveillance project covering the sales area, shelves and the outside zone.", client: "Shop / supermarket", problem: "Full monitoring was required for the sales floor, customer flow and critical points.", solution: "A multi-camera system with suitable indoor and outdoor points was installed.", result: "Internal control improved, disputes became easier to review and site activity became easier to monitor.", badges: ["Sales floor", "Customer flow", "Business security"] },
      ],
      partnersTitle: "For dealers and partners",
      partnersHeading: "Need a reliable supplier and a professional regional partner?",
      partnersText: "WST also works with dealers, installers and regional partners. We focus on product supply, practical cooperation and fast communication.",
      partnerList: ["Wholesale supply and cooperation opportunities", "Equipment selection and technical consultation", "Practical support in projects and sales", "Open to long-term regional partnerships"],
      partnerFormTitle: "Leave a partnership request",
      partnerFormText: "If you are a dealer, installer or regional partner, leave a short request.",
      partnerCompany: "Company or name",
      partnerCity: "Region / city",
      partnerSubmit: "Send partnership request",
      faqTitle: "Frequently asked questions",
      faqHeading: "If you have a question, the answer is ready",
      faq: [
        { q: "What types of sites do you work with?", a: "We work with homes, shops, offices, warehouses, institutions, companies and government facilities." },
        { q: "Do you only sell products or also install them?", a: "Both options are available: equipment supply, design, installation, commissioning and maintenance." },
        { q: "How quickly do you provide pricing?", a: "For simple requests we provide a quick estimate. For larger sites we prepare an accurate proposal based on requirements." },
        { q: "Do you work with dealers?", a: "Yes. We offer wholesale supply and cooperation formats for dealers and installers." },
      ],
      locationsTitle: "Locations",
      locationsHeading: "Office and branch locations can be clearly presented on the website",
      locationsText: "To make it easier for customers to reach you, address, working hours, phone and map can be shown separately.",
      routeCta: "Clarify location →",
      branches: [
        { city: "Tashkent", title: "Main office / showroom", address: "Address will be added: district, street, building", phone: "+998 94 882 88 84", telegram: "@wst_admin" },
        { city: "Tashkent", title: "Sales point", address: "Address will be added: district, street, building", phone: "+998 94 882 88 84", telegram: "@wst_admin" },
        { city: "Namangan", title: "Branch", address: "Address will be added: district, street, building", phone: "+998 93 751 88 84", telegram: "@wstnamangan" },
      ],
      phoneLabel: "Phone",
      hoursLabel: "Working hours",
      hoursShort: "Monday–Saturday 8:30–18:30 • Sunday 10:30–16:30",
      workSchedule: [
        "Monday — 8:30–18:30, lunch 13:00–14:00",
        "Tuesday — 8:30–18:30, lunch 13:00–14:00",
        "Wednesday — 8:30–18:30, lunch 13:00–14:00",
        "Thursday — 8:30–18:30, lunch 13:00–14:00",
        "Friday — 8:30–18:30, lunch 13:00–14:00",
        "Saturday — 8:30–18:30, lunch 13:00–14:00",
        "Sunday — 10:30–16:30, lunch 13:00–14:00"
      ],
      locationLink: "Add route and exact address →",
      mapTitle: "Map block",
      mapHeading: "Google Map or Yandex Map will be placed here",
      mapText: "Later, each branch can have its own map, navigation link and geolocation.",
      mapPlaceholder: `An interactive map,
location pins and a 'Get Directions' button will appear here.`,
      contactTitle: "Contact",
      contactHeading: "Let us discuss the right solution for your site today",
      contactText: "Reach us by phone, Telegram or WhatsApp. If you briefly describe your need, we can identify the right direction faster.",
      telegramLabel: "Telegram",
      contactFormTitle: "Request form",
      objectLocation: "Site location",
      objectNeed: "Write what service you need",
      send: "Send",
      contactNote: "Later, Telegram, WhatsApp, CRM and an admin panel can be connected to the website.",
      finalTitle: "Final call",
      finalHeading: "Do not postpone your security decision. When the right system is installed on time, risk and losses are reduced.",
      finalText: "WST offers not just cameras, but a working, reliable and result-oriented solution. Contact us today — we will define the best direction for your site together.",
      finalPrimary: "Contact now",
      finalSecondary: "Call now",
      footerTag: "Premium security solutions • Uzbekistan",
      footerBranch: "Tashkent and Namangan branches • Exact addresses will be added",
      footerCopy: "© 2026 WST. All rights reserved.",
      heroBoxTitle: "Real WST projects",
      heroBoxHeading: "The visuals on this site come from real facilities completed by WST",
      heroBoxText: "These images were taken from sites where systems were installed for homes, institutions, retail and production facilities, showing the company’s practical experience.",
      miniTrust: ["Fast response — practical handling of requests", "Warranty — responsibility for product and service", "Technical strength — the right solution and the right installation"],
    },
  };

  const t = content[lang];

  const ctaButton = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5";

  return (
    <div className="min-h-screen bg-[#081120] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#081120]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-3xl font-extrabold tracking-[0.32em] text-white sm:text-4xl">WST</div>
            <div className="mt-1 text-[12px] uppercase tracking-[0.28em] text-white/70 sm:text-[13px]">World Security Technology</div>
          </div>
          <nav className="hidden gap-6 text-sm text-[#d7e0ea] lg:flex">
            <a href="#services" className="hover:text-white">{t.nav.services}</a>
            <a href="#solutions" className="hover:text-white">{t.nav.solutions}</a>
            <a href="#projects" className="hover:text-white">{t.nav.projects}</a>
            <a href="#brands" className="hover:text-white">{t.nav.brands}</a>
            <a href="#partners" className="hover:text-white">{t.nav.partners}</a>
            <a href="#locations" className="hover:text-white">{t.nav.locations}</a>
            <a href="#contact" className="hover:text-white">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            {["uz", "ru", "en"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`rounded-xl px-3 py-2 text-xs font-semibold ${lang === code ? "bg-[#c89b3c] text-[#081120]" : "border border-white/10 bg-[#11243a]/55 text-[#d7e0ea]"}`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(200,155,60,0.16),transparent_30%),radial-gradient(circle_at_left,rgba(47,93,138,0.14),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div>
              <div className="mb-5 inline-flex rounded-full border border-[#c89b3c]/30 bg-[#11243a]/55 px-4 py-2 text-xs font-medium tracking-wide text-[#e7c56a]">
                {t.heroBadge}
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                {t.heroTitle1} <span className="text-[#e7c56a]">{t.heroTitle2}</span> {t.heroTitle3}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7e0ea]">{t.heroText}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className={`${ctaButton} bg-[#c89b3c] text-[#081120] shadow-xl shadow-[#c89b3c]/15`}>{t.primaryCta}</a>
                <a href="#projects" className={`${ctaButton} border border-white/15 bg-[#11243a]/55 text-white`}>{t.secondaryCta}</a>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-[#c7d2e0] sm:grid-cols-3">
                {t.miniTrust.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-[#11243a]/45 p-4">{item}</div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#11243a]/55 shadow-2xl shadow-black/30">
                <div className="relative h-[260px] w-full">
                  <img src={heroImage} alt="WST visual" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-[#081120]/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.heroBoxTitle}</div>
                    <div className="mt-2 text-xl font-semibold">{t.heroBoxHeading}</div>
                    <div className="mt-2 max-w-md text-sm leading-7 text-[#d7e0ea]">{t.heroBoxText}</div>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-[#11243a]/55 p-6 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="rounded-[24px] border border-white/10 bg-[#11243a] p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.quickLead}</div>
                  <h2 className="mt-3 text-2xl font-semibold">{t.leadTitle}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#c7d2e0]">{t.leadText}</p>
                  <form className="mt-6 space-y-4">
                    <input type="text" placeholder={t.formName} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                    <input type="tel" placeholder={t.formPhone} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                    <input type="text" placeholder={t.formType} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                    <textarea rows={4} placeholder={t.formNeed} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                    <button type="button" className="w-full rounded-2xl bg-[#c89b3c] px-5 py-3 text-sm font-semibold text-[#081120] shadow-xl shadow-[#c89b3c]/15">{t.formSubmit}</button>
                  </form>
                  <p className="mt-4 text-xs leading-6 text-[#9fb0c3]">{t.trustLine}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-[#0d1b2a]">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
            {t.stats.map(([value, label]) => (
              <div key={value} className="rounded-2xl border border-white/10 bg-[#11243a]/55 p-5">
                <div className="text-2xl font-semibold text-[#e7c56a]">{value}</div>
                <div className="mt-2 text-sm text-[#c7d2e0]">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div key={index} className="group overflow-hidden rounded-[28px] border border-white/10 bg-[#11243a]/55">
                <div className="relative h-64">
                  <img src={image} alt={t.gallery[index]} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-[#081120]/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <div className="text-lg font-semibold">{t.gallery[index]}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.servicesTitle}</div>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.servicesHeading}</h2>
            <p className="mt-4 text-lg leading-8 text-[#c7d2e0]">{t.servicesText}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {t.services.map((item) => (
              <div key={item.title} className="rounded-[26px] border border-white/10 bg-[#11243a]/55 p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#c7d2e0]">{item.text}</p>
                <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-[#e7c56a]">{t.serviceCta}</a>
              </div>
            ))}
          </div>
        </section>

        <section id="solutions" className="bg-[#0d1b2a] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.solutionsTitle}</div>
                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.solutionsHeading}</h2>
                <p className="mt-4 text-lg leading-8 text-[#c7d2e0]">{t.solutionsText}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {t.sectors.map((sector) => (
                  <div key={sector} className="rounded-2xl border border-white/10 bg-[#11243a]/55 p-5 text-sm font-medium text-white/85">{sector}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.whyTitle}</div>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.whyHeading}</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {t.reasons.map((reason) => (
              <div key={reason} className="rounded-[24px] border border-white/10 bg-[#11243a]/55 p-6 text-sm leading-7 text-[#e5edf5]">{reason}</div>
            ))}
          </div>
        </section>

        <section id="brands" className="bg-[#0d1b2a] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.brandsTitle}</div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.brandsHeading}</h2>
              <p className="mt-4 text-lg leading-8 text-[#c7d2e0]">{t.brandsText}</p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
              {t.brands.map((brand) => (
                <div key={brand.name} className="rounded-[28px] border border-white/10 bg-[#11243a]/55 p-6">
                  <div className="inline-flex rounded-full border border-[#c89b3c]/30 bg-[#081120]/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e7c56a]">
                    {brand.status}
                  </div>
                  <div className="mt-4 text-2xl font-semibold text-[#e7c56a]">{brand.name}</div>
                  <p className="mt-4 text-sm leading-7 text-[#c7d2e0]">{brand.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#081120] py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.processTitle}</div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.processHeading}</h2>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-4">
              {t.process.map((item) => (
                <div key={item.step} className="rounded-[26px] border border-white/10 bg-[#11243a]/55 p-6">
                  <div className="text-sm font-semibold text-[#e7c56a]">{item.step}</div>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c7d2e0]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.projectsTitle}</div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.projectsHeading}</h2>
              <p className="mt-4 text-lg leading-8 text-[#c7d2e0]">{t.projectsText}</p>
            </div>
            <a href="#contact" className="text-sm font-semibold text-[#e7c56a]">{t.projectsCta}</a>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {t.projects.map((project, index) => (
              <div key={project.title} className="overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#11243a]/85 to-[#0f1f33]/78">
                <div className="relative h-56">
                  <img src={projectImages[index]} alt={project.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081120] via-[#081120]/30 to-transparent" />
                  <div className="absolute left-0 top-0 m-4 rounded-full border border-[#c89b3c]/30 bg-[#081120]/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{project.type}</div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-[#9fb0c3]">{t.projectClient}: {project.client}</div>
                  <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c7d2e0]">{project.text}</p>
                  <div className="mt-6 space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-[#11243a]/70 p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e7c56a]">{t.projectProblem}</div>
                      <p className="mt-2 text-sm leading-7 text-[#d7e0ea]">{project.problem}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#11243a]/70 p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e7c56a]">{t.projectSolution}</div>
                      <p className="mt-2 text-sm leading-7 text-[#d7e0ea]">{project.solution}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-[#11243a]/70 p-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e7c56a]">{t.projectResult}</div>
                      <p className="mt-2 text-sm leading-7 text-[#d7e0ea]">{project.result}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.badges.map((badge) => (
                      <span key={badge} className="rounded-full border border-white/10 bg-[#081120]/80 px-3 py-1 text-xs font-medium text-[#e5edf5]">{badge}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="partners" className="bg-[#0d1b2a] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.partnersTitle}</div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.partnersHeading}</h2>
              <p className="mt-4 text-lg leading-8 text-[#c7d2e0]">{t.partnersText}</p>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-[#d7e0ea]">
                {t.partnerList.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#11243a]/55 p-6">
              <h3 className="text-2xl font-semibold">{t.partnerFormTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-[#c7d2e0]">{t.partnerFormText}</p>
              <div className="mt-6 grid gap-4">
                <input type="text" placeholder={t.partnerCompany} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                <input type="tel" placeholder={t.formPhone} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                <input type="text" placeholder={t.partnerCity} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                <button type="button" className="rounded-2xl bg-[#c89b3c] px-5 py-3 text-sm font-semibold text-[#081120]">{t.partnerSubmit}</button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.faqTitle}</div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.faqHeading}</h2>
            </div>
            <div className="space-y-4">
              {t.faq.map((item) => (
                <div key={item.q} className="rounded-[24px] border border-white/10 bg-[#11243a]/55 p-6">
                  <h3 className="text-lg font-semibold">{item.q}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c7d2e0]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.locationsTitle}</div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.locationsHeading}</h2>
              <p className="mt-4 text-lg leading-8 text-[#c7d2e0]">{t.locationsText}</p>
            </div>
            <a href="#contact" className="text-sm font-semibold text-[#e7c56a]">{t.routeCta}</a>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {t.branches.map((branch) => (
                <div key={`${branch.city}-${branch.title}`} className="rounded-[28px] border border-white/10 bg-[#11243a]/55 p-6">
                  <div className="inline-flex rounded-full border border-[#c89b3c]/25 bg-[#081120]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{branch.city}</div>
                  <h3 className="mt-4 text-xl font-semibold">{branch.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#c7d2e0]">{branch.address}</p>
                  <div className="mt-5 text-sm text-[#e5edf5]"><span className="text-[#9fb0c3]">{t.phoneLabel}:</span> {branch.phone}</div>
                  <div className="mt-2 text-sm text-[#e5edf5]"><span className="text-[#9fb0c3]">{t.telegramLabel}:</span> {branch.telegram}</div>
                  <div className="mt-2 text-sm text-[#e5edf5]"><span className="text-[#9fb0c3]">{t.hoursLabel}:</span> {t.hoursShort}</div>
                  <a href="#contact" className="mt-5 inline-flex text-sm font-semibold text-[#e7c56a]">{t.locationLink}</a>
                </div>
              ))}
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#11243a]/55 p-6">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.mapTitle}</div>
              <h3 className="mt-3 text-2xl font-semibold">{t.mapHeading}</h3>
              <div className="mt-6 flex h-[320px] items-center justify-center rounded-[24px] border border-dashed border-white/10 bg-[#081120] px-6 text-center text-sm leading-7 text-[#9fb0c3] whitespace-pre-line">{t.mapPlaceholder}</div>
              <p className="mt-4 text-sm leading-7 text-[#c7d2e0]">{t.mapText}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#0d1b2a] py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.contactTitle}</div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.contactHeading}</h2>
              <p className="mt-4 text-lg leading-8 text-[#c7d2e0]">{t.contactText}</p>
              <div className="mt-8 space-y-4 text-sm text-[#e5edf5]">
                <div className="rounded-2xl border border-white/10 bg-[#11243a]/55 p-5"><div className="text-[#9fb0c3]">{t.phoneLabel}</div><div className="mt-1 text-lg font-semibold">Tashkent: +998 94 882 88 84</div><div className="mt-1 text-lg font-semibold">Namangan: +998 93 751 88 84</div></div>
                <div className="rounded-2xl border border-white/10 bg-[#11243a]/55 p-5"><div className="text-[#9fb0c3]">{t.telegramLabel}</div><div className="mt-1 text-lg font-semibold">Tashkent: @wst_admin</div><div className="mt-1 text-lg font-semibold">Namangan: @wstnamangan</div></div>
                <div className="rounded-2xl border border-white/10 bg-[#11243a]/55 p-5"><div className="text-[#9fb0c3]">{t.hoursLabel}</div><div className="mt-3 space-y-2">{t.workSchedule.map((item) => (<div key={item} className="text-sm font-medium text-[#e5edf5]">{item}</div>))}</div></div>
              </div>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-[#11243a]/55 p-6">
              <h3 className="text-2xl font-semibold">{t.contactFormTitle}</h3>
              <div className="mt-6 grid gap-4">
                <input type="text" placeholder={t.formName} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                <input type="tel" placeholder={t.formPhone} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                <input type="text" placeholder={t.objectLocation} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                <textarea rows={5} placeholder={t.objectNeed} className="w-full rounded-2xl border border-white/10 bg-[#11243a]/55 px-4 py-3 text-sm outline-none placeholder:text-white/35 focus:border-[#c89b3c]/50" />
                <button type="button" className="rounded-2xl bg-[#c89b3c] px-5 py-3 text-sm font-semibold text-[#081120]">{t.send}</button>
              </div>
              <p className="mt-4 text-xs leading-6 text-[#9fb0c3]">{t.contactNote}</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-[#c89b3c]/20 bg-gradient-to-r from-[#0d1b2e] to-[#11243a] p-8 sm:p-10 lg:p-12">
            <div className="max-w-4xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#e7c56a]">{t.finalTitle}</div>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl lg:text-5xl">{t.finalHeading}</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#d7e0ea]">{t.finalText}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact" className={`${ctaButton} bg-[#c89b3c] text-[#081120]`}>{t.finalPrimary}</a>
                <a href="tel:+998948828884" className={`${ctaButton} border border-white/15 bg-[#11243a]/55 text-white`}>{t.finalSecondary}</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#060d18]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[#9fb0c3] sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <div className="text-lg font-bold tracking-[0.18em] text-[#e5edf5] sm:text-xl">WST — World Security Technology</div>
            <div>{t.footerTag}</div>
            <div className="mt-2 text-xs">{t.footerBranch}</div>
          </div>
          <div>{t.footerCopy}</div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#081120]/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <a href="tel:+998948828884" className="flex-1 rounded-2xl bg-[#c89b3c] px-4 py-3 text-center text-sm font-semibold text-[#081120]">{t.finalSecondary}</a>
          <a href="#contact" className="flex-1 rounded-2xl border border-white/15 bg-[#11243a]/55 px-4 py-3 text-center text-sm font-semibold text-white">{t.formSubmit}</a>
        </div>
      </div>
    </div>
  );
}
