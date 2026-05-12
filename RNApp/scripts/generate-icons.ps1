Add-Type -AssemblyName System.Drawing

$projectRoot = "C:\FEdevelop\RNApp"
$srcIcon     = Join-Path $projectRoot "assets\app_icon.png"
$srcSplash   = Join-Path $projectRoot "assets\splash.png"

function Resize-Image {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Width,
        [int]$Height,
        [string]$BackgroundColor = "Transparent"
    )

    $img = [System.Drawing.Image]::FromFile($InputPath)
    try {
        $bmp = New-Object System.Drawing.Bitmap($Width, $Height)
        $g   = [System.Drawing.Graphics]::FromImage($bmp)
        try {
            $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.SmoothingMode     = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $g.PixelOffsetMode   = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $g.CompositingQuality= [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

            if ($BackgroundColor -ne "Transparent") {
                $brush = New-Object System.Drawing.SolidBrush([System.Drawing.ColorTranslator]::FromHtml($BackgroundColor))
                $g.FillRectangle($brush, 0, 0, $Width, $Height)
                $brush.Dispose()
            }

            $g.DrawImage($img, 0, 0, $Width, $Height)
        } finally {
            $g.Dispose()
        }

        $dir = Split-Path $OutputPath -Parent
        if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force -Path $dir | Out-Null }
        $bmp.Save($OutputPath, [System.Drawing.Imaging.ImageFormat]::Png)
        $bmp.Dispose()
    } finally {
        $img.Dispose()
    }
    Write-Host "Created: $OutputPath ($Width x $Height)"
}

# ===== Android Icons =====
$androidIcons = @(
    @{ folder = "mipmap-mdpi";    size = 48 },
    @{ folder = "mipmap-hdpi";    size = 72 },
    @{ folder = "mipmap-xhdpi";   size = 96 },
    @{ folder = "mipmap-xxhdpi";  size = 144 },
    @{ folder = "mipmap-xxxhdpi"; size = 192 }
)

foreach ($icon in $androidIcons) {
    $dir   = Join-Path $projectRoot "android\app\src\main\res\$($icon.folder)"
    $size  = $icon.size
    Resize-Image -InputPath $srcIcon -OutputPath (Join-Path $dir "ic_launcher.png")       -Width $size -Height $size
    Resize-Image -InputPath $srcIcon -OutputPath (Join-Path $dir "ic_launcher_round.png") -Width $size -Height $size
}

# ===== Android Splash =====
$splashSizes = @(
    @{ folder = "drawable-mdpi";    width = 320;  height = 480  },
    @{ folder = "drawable-hdpi";    width = 480;  height = 800  },
    @{ folder = "drawable-xhdpi";   width = 720;  height = 1280 },
    @{ folder = "drawable-xxhdpi";  width = 1080; height = 1920 },
    @{ folder = "drawable-xxxhdpi"; width = 1440; height = 2560 }
)

foreach ($s in $splashSizes) {
    $dir = Join-Path $projectRoot "android\app\src\main\res\$($s.folder)"
    Resize-Image -InputPath $srcSplash -OutputPath (Join-Path $dir "splash.png") -Width $s.width -Height $s.height -BackgroundColor "#FFFFFF"
}

# ===== iOS App Icon =====
$iosIconDir = Join-Path $projectRoot "ios\RNApp\Images.xcassets\AppIcon.appiconset"
$iosIcons = @(
    @{ name = "Icon-20@2x.png";       size = 40   },
    @{ name = "Icon-20@3x.png";       size = 60   },
    @{ name = "Icon-29@2x.png";       size = 58   },
    @{ name = "Icon-29@3x.png";       size = 87   },
    @{ name = "Icon-40@2x.png";       size = 80   },
    @{ name = "Icon-40@3x.png";       size = 120  },
    @{ name = "Icon-60@2x.png";       size = 120  },
    @{ name = "Icon-60@3x.png";       size = 180  },
    @{ name = "Icon-20.png";          size = 20   },
    @{ name = "Icon-29.png";          size = 29   },
    @{ name = "Icon-40.png";          size = 40   },
    @{ name = "Icon-76.png";          size = 76   },
    @{ name = "Icon-76@2x.png";       size = 152  },
    @{ name = "Icon-83.5@2x.png";     size = 167  },
    @{ name = "Icon-1024.png";        size = 1024 }
)

foreach ($icon in $iosIcons) {
    Resize-Image -InputPath $srcIcon -OutputPath (Join-Path $iosIconDir $icon.name) -Width $icon.size -Height $icon.size -BackgroundColor "#FFFFFF"
}

# ===== iOS Splash =====
$iosSplashDir = Join-Path $projectRoot "ios\RNApp\Images.xcassets\SplashIcon.imageset"
Resize-Image -InputPath $srcSplash -OutputPath (Join-Path $iosSplashDir "splash.png")    -Width 200 -Height 200 -BackgroundColor "#FFFFFF"
Resize-Image -InputPath $srcSplash -OutputPath (Join-Path $iosSplashDir "splash@2x.png") -Width 400 -Height 400 -BackgroundColor "#FFFFFF"
Resize-Image -InputPath $srcSplash -OutputPath (Join-Path $iosSplashDir "splash@3x.png") -Width 600 -Height 600 -BackgroundColor "#FFFFFF"

Write-Host "`nAll icons and splash images generated successfully."
