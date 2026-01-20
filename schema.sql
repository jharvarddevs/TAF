-- The Acts Foundation Database Schema
-- MySQL 5.7+ or MariaDB 10.2+

CREATE DATABASE IF NOT EXISTS acts_foundation CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE acts_foundation;

-- Messages table (contact form submissions)
CREATE TABLE IF NOT EXISTS messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_created_at (created_at),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Volunteers table (volunteer applications)
CREATE TABLE IF NOT EXISTS volunteers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    message TEXT,
    quiz_answers JSON,
    status ENUM('pending', 'contacted', 'active', 'inactive') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_created_at (created_at),
    INDEX idx_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Donors table (Acts 20:35 Circle members)
CREATE TABLE IF NOT EXISTS donors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_anonymous BOOLEAN DEFAULT FALSE,
    city VARCHAR(255),
    badge_level ENUM('supporter', 'family-sponsor', 'community-builder', 'philadelphia-champion') NOT NULL DEFAULT 'supporter',
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_badge_level (badge_level),
    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample donors for testing
INSERT INTO donors (name, is_anonymous, city, badge_level, message, created_at) VALUES
('Sarah M.', FALSE, 'Philadelphia, PA', 'family-sponsor', 'So grateful to be part of this mission.', '2024-01-15 10:00:00'),
('Anonymous', TRUE, 'New York, NY', 'community-builder', 'Every family deserves dignity and hope.', '2024-02-20 14:30:00'),
('Michael T.', FALSE, 'Camden, NJ', 'philadelphia-champion', 'Proud to support Philadelphia families.', '2023-12-10 09:15:00'),
('Jennifer L.', FALSE, 'Philadelphia, PA', 'supporter', 'Thank you for being a blessing to our community.', '2024-03-05 16:45:00'),
('Anonymous', TRUE, 'Wilmington, DE', 'family-sponsor', 'It is more blessed to give than to receive.', '2024-01-28 11:20:00'),
('David K.', FALSE, 'Philadelphia, PA', 'supporter', NULL, '2024-02-14 13:00:00');
