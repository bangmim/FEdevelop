Add-Type -AssemblyName System.Drawing

$projectRoot = "C:\FEdevelop\RNApp"
$srcSplash   = Join-Path $projectRoot "assets\splash.png"

function Resize-Square {
    param([string]$InputPath, [string]$OutputPath, [int]$Size)

    $img = [System.Drawing.Image]::FromFile($InputPath)
    try {
        $bmp = New-Object System.Drawing.Bitmap($Size, $Size)
        $g   = [System.Drawing.Graphics]::FromImage($bmp)
        try {
            $g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            $g.PixelOffsetMode    = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
            $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $g.Clear([System.Drawing.Color]::Transparent)
            $g.DrawImage($img, 0, 0, $Size, $Size)
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
    Write-Host "Created: $OutputPath ($Size x $Size)"
}

# Delete previously created stretched splash images (will use layer-list approach instead)
@("drawable-mdpi", "drawable-hdpi", "drawable-xhdpi", "drawable-xxhdpi", "drawable-xxxhdpi") | ForEach-Object {
    $oldFile = Join-Path $projectRoot "android\app\src\main\res\$_\splash.png"
    if (Test-Path $oldFile) { Remove-Item $oldFile -Force }
}

# Create square splash icons for layer-list usage
$splashIcons = @(
    @{ folder = "drawable-mdpi";    size = 100 },
    @{ folder = "drawable-hdpi";    size = 150 },
    @{ folder = "drawable-xhdpi";   size = 200 },
    @{ folder = "drawable-xxhdpi";  size = 300 },
    @{ folder = "drawable-xxxhdpi"; size = 400 }
)

foreach ($s in $splashIcons) {
    $dir  = Join-Path $projectRoot "android\app\src\main\res\$($s.folder)"
    $size = $s.size
    Resize-Square -InputPath $srcSplash -OutputPath (Join-Path $dir "splash_icon.png") -Size $size
}

Write-Host "`nSplash icons generated successfully."
