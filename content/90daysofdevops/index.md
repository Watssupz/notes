---
title: "90 Days of DevOps"
description: "Lộ trình 90 ngày xây dựng nền tảng kiến thức và kỹ năng thực hành DevOps từ cơ bản đến nâng cao (Michael Cade)"
---

# 90 Days of DevOps

> [!NOTE]
> **Phiên bản:** Bản 2022 (Việt hóa)  
> Tài liệu này được biên dịch dựa trên **phiên bản 2022** của dự án [90DaysOfDevOps](https://github.com/MichaelCade/90DaysOfDevOps/tree/main/2022/vi) do cộng đồng lập trình viên Việt Nam đóng góp và chia sẻ.

Tài liệu này ghi lại hành trình học tập và thực hành các kiến thức nền tảng về **DevOps** dựa trên dự án mã nguồn mở nổi tiếng [90DaysOfDevOps](https://github.com/MichaelCade/90DaysOfDevOps) của tác giả **Michael Cade**.

Mục tiêu của lộ trình là dành ra **1 giờ mỗi ngày trong 90 ngày** để tìm hiểu 13 lĩnh vực trọng tâm trong hệ sinh thái DevOps.

---

## 13 Lĩnh vực trọng tâm

| Giai đoạn        | Lĩnh vực                                                                              | Nội dung trọng tâm                                                         |
| :--------------- | :------------------------------------------------------------------------------------ | :------------------------------------------------------------------------- |
| **Ngày 1 – 6**   | [DevOps Culture & Mindset](#01-devops-là-gì-và-tại-sao-chúng-ta-sử-dụng-nó)           | Khái niệm DevOps, trách nhiệm kỹ sư, Agile, vòng đời phát triển ứng dụng   |
| **Ngày 7 – 13**  | [Lập trình cơ bản (Go)](#02-học-một-ngôn-ngữ-lập-trình-go)                            | Thiết lập môi trường, biến, hàm, con trỏ, CLI application trong DevOps     |
| **Ngày 14 – 20** | [Kiến thức Linux](#03-kiến-thức-nền-tảng-linux)                                       | Hệ điều hành, filesystem, quản lý tiến trình, Vim, SSH, Bash scripting     |
| **Ngày 21 – 27** | [Mạng máy tính (Networking)](#04-kiến-thức-mạng-máy-tính-networking)                  | Mô hình OSI, TCP/IP, DNS, routing, tự động hóa mạng với Python             |
| **Ngày 28 – 34** | [Điện toán đám mây (Cloud)](#05-tìm-hiểu-điện-toán-đám-mây-cloud-provider)            | Kiến trúc Cloud, compute, storage, virtual network, bảo mật đám mây        |
| **Ngày 35 – 41** | [Quản lý phiên bản (Git)](#06-quản-lý-phiên-bản-mã-nguồn-với-git)                     | Git workflow, branching, merge/rebase, pull request, mã nguồn mở           |
| **Ngày 42 – 48** | [Containers & Docker](#07-container--docker)                                          | Container vs VM, Dockerfile, build image, Docker Compose, networking       |
| **Ngày 49 – 55** | [Kubernetes (K8s)](#08-điều-phối-container-với-kubernetes)                            | Kiến trúc cluster, Pods, Deployments, Services, Ingress, ConfigMap         |
| **Ngày 56 – 62** | [Infrastructure as Code (IaC)](#09-cơ-sở-hạ-tầng-dưới-dạng-mã-infrastructure-as-code) | Tư duy IaC, Terraform core, HCL, Providers, Modules, state management      |
| **Ngày 63 – 69** | [Configuration Management](#10-tự-động-hóa-quản-lý-cấu-hình-configuration-management) | Ansible cơ bản, Playbooks, Roles, Inventory, Vault, tự động hoá cấu hình   |
| **Ngày 70 – 76** | [CI/CD Pipelines](#11-tự-động-hóa-quy-trình-cicd)                                     | Jenkins, GitHub Actions, ArgoCD (GitOps), thiết lập build & deploy tự động |
| **Ngày 77 – 83** | [Monitoring & Logging](#12-giám-sát-quản-lý-log-và-trực-quan-hóa-observability)       | Metric, Logs, Tracing, Prometheus, Grafana, ELK / EFK Stack                |
| **Ngày 84 – 90** | [Lưu trữ & Bảo vệ dữ liệu](#13-lưu-trữ--bảo-vệ-dữ-liệu)                               | Data services, chiến lược backup, khôi phục thảm họa (DR), bảo mật dữ liệu |

---

## Chi tiết lộ trình & Đường dẫn từng ngày

### 01. DevOps là gì và tại sao chúng ta sử dụng nó?

- ♾️ **Ngày 01:** [Giới thiệu](/90daysofdevops/2022/vi/Days/day01)
- ♾️ **Ngày 02:** [Trách nhiệm của kỹ sư DevOps](/90daysofdevops/2022/vi/Days/day02)
- ♾️ **Ngày 03:** [Vòng đời DevOps - Tập trung vào ứng dụng](/90daysofdevops/2022/vi/Days/day03)
- ♾️ **Ngày 04:** [DevOps & Agile](/90daysofdevops/2022/vi/Days/day04)
- ♾️ **Ngày 05:** [Kế hoạch > Viết mã > Xây dựng > Kiểm thử > Phát hành > Triển khai > Vận hành > Giám sát](/90daysofdevops/2022/vi/Days/day05)
- ♾️ **Ngày 06:** [DevOps - Những câu chuyện thực tế](/90daysofdevops/2022/vi/Days/day06)

### 02. Học một ngôn ngữ lập trình (Go)

- ⌨️ **Ngày 07:** [Bức tranh toàn cảnh: DevOps & Học một ngôn ngữ lập trình](/90daysofdevops/2022/vi/Days/day07)
- ⌨️ **Ngày 08:** [Thiết lập môi trường DevOps cho Go & Hello World](/90daysofdevops/2022/vi/Days/day08)
- ⌨️ **Ngày 09:** [Giải thích mã Hello World](/90daysofdevops/2022/vi/Days/day09)
- ⌨️ **Ngày 10:** [Không gian làm việc của Go](/90daysofdevops/2022/vi/Days/day10)
- ⌨️ **Ngày 11:** [Biến, hằng số & kiểu dữ liệu](/90daysofdevops/2022/vi/Days/day11)
- ⌨️ **Ngày 12:** [Nhận thông tin đầu vào sử dụng con trỏ và chương trình hoàn thiện](/90daysofdevops/2022/vi/Days/day12)
- ⌨️ **Ngày 13:** [Tweet tiến trình của bạn với ứng dụng mới của chúng ta](/90daysofdevops/2022/vi/Days/day13)

### 03. Kiến thức nền tảng Linux

- 🐧 **Ngày 14:** [Bức tranh lớn: DevOps và Linux](/90daysofdevops/2022/vi/Days/day14)
- 🐧 **Ngày 15:** [Các lệnh Linux cho DevOps (Thực tế là tất cả mọi người)](/90daysofdevops/2022/vi/Days/day15)
- 🐧 **Ngày 16:** [Quản lý Hệ thống Linux, Hệ thống Tệp & Lưu trữ](/90daysofdevops/2022/vi/Days/day16)
- 🐧 **Ngày 17:** [Text Editors - nano vs vim](/90daysofdevops/2022/vi/Days/day17)
- 🐧 **Ngày 18:** [SSH & Máy chủ Web (LAMP)](/90daysofdevops/2022/vi/Days/day18)
- 🐧 **Ngày 19:** [Tự động hóa các tác vụ với các tập lệnh bash](/90daysofdevops/2022/vi/Days/day19)
- 🐧 **Ngày 20:** [Thiết lập máy trạm phát triển - những điều tuyệt vời](/90daysofdevops/2022/vi/Days/day20)

### 04. Kiến thức mạng máy tính (Networking)

- 🌐 **Ngày 21:** [Bức tranh toàn cảnh: DevOps và Mạng máy tính](/90daysofdevops/2022/vi/Days/day21)
- 🌐 **Ngày 22:** [Mô hình OSI - 7 lớp mạng](/90daysofdevops/2022/vi/Days/day22)
- 🌐 **Ngày 23:** [Giao thức mạng](/90daysofdevops/2022/vi/Days/day23)
- 🌐 **Ngày 24:** [Tự động hoá mạng máy tính](/90daysofdevops/2022/vi/Days/day24)
- 🌐 **Ngày 25:** [Python cho tự động hoá mạng máy tính](/90daysofdevops/2022/vi/Days/day25)
- 🌐 **Ngày 26:** [Building our Lab](/90daysofdevops/2022/vi/Days/day26)
- 🌐 **Ngày 27:** [Getting Hands-On with Python & Network](/90daysofdevops/2022/vi/Days/day27)

### 05. Tìm hiểu Điện toán đám mây (Cloud Provider)

- ☁️ **Ngày 28:** [Bức tranh toàn cảnh: DevOps & The Cloud](/90daysofdevops/2022/vi/Days/day28)
- ☁️ **Ngày 29:** [Kiến thức cơ bản về Microsoft Azure](/90daysofdevops/2022/vi/Days/day29)
- ☁️ **Ngày 30:** [Mô hình bảo mật Microsoft Azure](/90daysofdevops/2022/vi/Days/day30)
- ☁️ **Ngày 31:** [Mô hình Điện toán Microsoft Azure](/90daysofdevops/2022/vi/Days/day31)
- ☁️ **Ngày 32:** [Mô hình lưu trữ và cơ sở dữ liệu Microsoft Azure](/90daysofdevops/2022/vi/Days/day32)
- ☁️ **Ngày 33:** [Mô hình Mạng Microsoft Azure + Quản lý Azure](/90daysofdevops/2022/vi/Days/day33)
- ☁️ **Ngày 34:** [Thực hành với Microsoft Azure](/90daysofdevops/2022/vi/Days/day34)

### 06. Quản lý phiên bản mã nguồn với Git

- 📚 **Ngày 35:** [Bức tranh toàn cảnh: Git - Quản lý phiên bản](/90daysofdevops/2022/vi/Days/day35)
- 📚 **Ngày 36:** [Cài đặt & Cấu hình Git](/90daysofdevops/2022/vi/Days/day36)
- 📚 **Ngày 37:** [Giới thiệu về Git](/90daysofdevops/2022/vi/Days/day37)
- 📚 **Ngày 38:** [Staging & Changing](/90daysofdevops/2022/vi/Days/day38)
- 📚 **Ngày 39:** [Xem, unstaging, loại bỏ & khôi phục](/90daysofdevops/2022/vi/Days/day39)
- 📚 **Ngày 40:** [Mạng xã hội dành cho code](/90daysofdevops/2022/vi/Days/day40)
- 📚 **Ngày 41:** [Quy trình làm việc với mã nguồn mở](/90daysofdevops/2022/vi/Days/day41)

### 07. Container & Docker

- 🏗️ **Ngày 42:** [Bức tranh toàn cảnh: Containers](/90daysofdevops/2022/vi/Days/day42)
- 🏗️ **Ngày 43:** [Docker là gì & Cài đặt](/90daysofdevops/2022/vi/Days/day43)
- 🏗️ **Ngày 44:** [Docker Images & Thực hành với Docker Desktop](/90daysofdevops/2022/vi/Days/day44)
- 🏗️ **Ngày 45:** [Phân tích một Docker Image](/90daysofdevops/2022/vi/Days/day45)
- 🏗️ **Ngày 46:** [Docker Compose](/90daysofdevops/2022/vi/Days/day46)
- 🏗️ **Ngày 47:** [Docker Networking & Security](/90daysofdevops/2022/vi/Days/day47)
- 🏗️ **Ngày 48:** [Các lựa chọn thay thế cho Docker](/90daysofdevops/2022/vi/Days/day48)

### 08. Điều phối Container với Kubernetes

- ☸ **Ngày 49:** [Bức tranh toàn cảnh: Kubernetes](/90daysofdevops/2022/vi/Days/day49)
- ☸ **Ngày 50:** [Chọn nền tảng chạy Kubernetes](/90daysofdevops/2022/vi/Days/day50)
- ☸ **Ngày 51:** [Triển khai Kubernetes cluster đầu tiên](/90daysofdevops/2022/vi/Days/day51)
- ☸ **Ngày 52:** [Thiết lập Kubernetes cluster đa node](/90daysofdevops/2022/vi/Days/day52)
- ☸ **Ngày 53:** [Tổng quan về Rancher - Thực hành](/90daysofdevops/2022/vi/Days/day53)
- ☸ **Ngày 54:** [Triển khai ứng dụng Kubernetes](/90daysofdevops/2022/vi/Days/day54)
- ☸ **Ngày 55:** [State và Ingress trong Kubernetes](/90daysofdevops/2022/vi/Days/day55)

### 09. Cơ sở hạ tầng dưới dạng mã (Infrastructure as Code)

- 🤖 **Ngày 56:** [Bức tranh toàn cảnh: Cơ sở hạ tầng dưới dạng mã (IaC)](/90daysofdevops/2022/vi/Days/day56)
- 🤖 **Ngày 57:** [Giới thiệu về Terraform](/90daysofdevops/2022/vi/Days/day57)
- 🤖 **Ngày 58:** [Ngôn ngữ cấu hình HashiCorp (HCL)](/90daysofdevops/2022/vi/Days/day58)
- 🤖 **Ngày 59:** [Tạo VM với Terraform & Biến](/90daysofdevops/2022/vi/Days/day59)
- 🤖 **Ngày 60:** [Docker Container, Providers & Modules](/90daysofdevops/2022/vi/Days/day60)
- 🤖 **Ngày 61:** [Kubernetes & Đa môi trường](/90daysofdevops/2022/vi/Days/day61)
- 🤖 **Ngày 62:** [Testing, Tools & Alternatives](/90daysofdevops/2022/vi/Days/day62)

### 10. Tự động hóa quản lý cấu hình (Configuration Management)

- 📜 **Ngày 63:** [Bức tranh toàn cảnh: Quản lý cấu hình](/90daysofdevops/2022/vi/Days/day63)
- 📜 **Ngày 64:** [Ansible: Bắt đầu](/90daysofdevops/2022/vi/Days/day64)
- 📜 **Ngày 65:** [Ansible Playbooks](/90daysofdevops/2022/vi/Days/day65)
- 📜 **Ngày 66:** [Tiếp tục với Ansible Playbooks...](/90daysofdevops/2022/vi/Days/day66)
- 📜 **Ngày 67:** [Sử dụng Role & Triển khai Loadbalancer](/90daysofdevops/2022/vi/Days/day67)
- 📜 **Ngày 68:** [Tags, Variables, Inventory & Database Server config](/90daysofdevops/2022/vi/Days/day68)
- 📜 **Ngày 69:** [Tất cả những thứ còn lại của Ansible - Automation Controller, AWX, Vault](/90daysofdevops/2022/vi/Days/day69)

### 11. Tự động hóa quy trình CI/CD

- 🔄 **Ngày 70:** [Bức tranh toàn cảnh: CI/CD Pipelines](/90daysofdevops/2022/vi/Days/day70)
- 🔄 **Ngày 71:** [Jenkins là gì?](/90daysofdevops/2022/vi/Days/day71)
- 🔄 **Ngày 72:** [Làm quen với Jenkins](/90daysofdevops/2022/vi/Days/day72)
- 🔄 **Ngày 73:** [Xây dựng Jenkins pipeline](/90daysofdevops/2022/vi/Days/day73)
- 🔄 **Ngày 74:** [Hello World - Jenkinsfile App Pipeline](/90daysofdevops/2022/vi/Days/day74)
- 🔄 **Ngày 75:** [Tổng quan về GitHub Actions](/90daysofdevops/2022/vi/Days/day75)
- 🔄 **Ngày 76:** [Tổng quan về ArgoCD](/90daysofdevops/2022/vi/Days/day76)

### 12. Giám sát, quản lý Log và trực quan hóa (Observability)

- 📈 **Ngày 77:** [Bức tranh toàn cảnh: Giám sát](/90daysofdevops/2022/vi/Days/day77)
- 📈 **Ngày 78:** [Thực hành với công cụ giám sát](/90daysofdevops/2022/vi/Days/day78)
- 📈 **Ngày 79:** [Bức tranh toàn cảnh: Quản lý log](/90daysofdevops/2022/vi/Days/day79)
- 📈 **Ngày 80:** [ELK Stack](/90daysofdevops/2022/vi/Days/day80)
- 📈 **Ngày 81:** [Fluentd & FluentBit](/90daysofdevops/2022/vi/Days/day81)
- 📈 **Ngày 82:** [EFK Stack](/90daysofdevops/2022/vi/Days/day82)
- 📈 **Ngày 83:** [Trực quan hóa dữ liệu - Grafana](/90daysofdevops/2022/vi/Days/day83)

### 13. Lưu trữ & Bảo vệ dữ liệu

- 🗃️ **Ngày 84:** [Bức tranh toàn cảnh: Quản lý dữ liệu](/90daysofdevops/2022/vi/Days/day84)
- 🗃️ **Ngày 85:** [Dịch vụ dữ liệu](/90daysofdevops/2022/vi/Days/day85)
- 🗃️ **Ngày 86:** [Sao lưu tất cả các nền tảng](/90daysofdevops/2022/vi/Days/day86)
- 🗃️ **Ngày 87:** [Thực hành với sao lưu & phục hồi](/90daysofdevops/2022/vi/Days/day87)
- 🗃️ **Ngày 88:** [Sao lưu theo hướng tập trung vào ứng dụng](/90daysofdevops/2022/vi/Days/day88)
- 🗃️ **Ngày 89:** [Khôi phục thảm họa (DR)](/90daysofdevops/2022/vi/Days/day89)
- 🗃️ **Ngày 90:** [Dữ liệu & ứng dụng: Tính di động](/90daysofdevops/2022/vi/Days/day90)

---

## Bản quyền & Nguồn tham khảo

- Dự án gốc: [MichaelCade/90DaysOfDevOps](https://github.com/MichaelCade/90DaysOfDevOps)
- Tác giả: **Michael Cade**
- Giấy phép tài liệu: [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/)
